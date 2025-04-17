import { _db } from "@/lib/Firebase.config";
import {
  __constructorRegisterFormData,
  RegisterFormData,
} from "@/utils/classes/register";
import { FirebaseError } from "firebase/app";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { data } = (await req.json()) as {
      data: RegisterFormData;
    };
    console.log("Request Body:", data);

    if (!data || typeof data !== "object") {
      return NextResponse.json(
        { message: "Bad Request: Invalid JSON format", error: "INVALID_JSON" },
        { status: 400 }
      );
    }

    if (!data.email || !data.mobile) {
      return NextResponse.json(
        {
          message: "Bad Request: Missing required fields (email or mobile)",
          error: "MISSING_REQUIRED_FIELDS",
        },
        { status: 400 }
      );
    }

    const registrationRef = collection(_db, "register");

    if (typeof data.email !== "string") {
      return NextResponse.json(
        {
          message: "Bad Request: Email must be a string",
          error: "INVALID_EMAIL_FORMAT",
        },
        { status: 400 }
      );
    }

    const existingUserQuery = query(
      registrationRef,
      where("email", "==", data.email)
    );
    const existingUser = await getDocs(existingUserQuery);

    if (!existingUser.empty) {
      return NextResponse.json(
        {
          message: "Conflict: User with this email already registered",
          error: "EMAIL_ALREADY_REGISTERED",
        },
        { status: 409 }
      );
    }

    const registration = __constructorRegisterFormData(data);
    console.log("New Registration:", registration);
    const docRef = await addDoc(registrationRef, registration);

    return NextResponse.json(
      {
        message: "Registration completed successfully",
        data: { ...registration, id: docRef.id },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/v1/event/register:", error);

    if (error instanceof FirebaseError) {
      return NextResponse.json(
        { message: "Firebase Error: " + error.message, errorCode: error.code },
        { status: 500 }
      );
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          message: "Bad Request: Invalid JSON syntax",
          error: "INVALID_JSON_SYNTAX",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal Server Error", error: "INTERNAL_SERVER_ERROR" },
      { status: 500 }
    );
  }
}
