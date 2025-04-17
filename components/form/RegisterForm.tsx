import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiClient } from "@/lib/axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company is required"),
  mobile: z.string().min(1, "Mobile number is required"),
  email: z.string().email("Invalid email address"),
  companyWebsite: z
    .string()
    .url("Invalid URL")
    .optional()
    .or(z.string().length(0)),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      company: "",
      mobile: "",
      email: "",
      companyWebsite: "",
      agree: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const data = {
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          jobTitle: values.jobTitle,
          company: values.company,
          mobile: values.mobile,
          email: values.email,
          companyWebsite: values.companyWebsite,
        },
      };

      const response = await apiClient().post("/event/register", data);

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have registered successfully!",
          confirmButtonText: "OK",
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: response.data.message || "Something went wrong",
          confirmButtonText: "OK",
        });
      }
    } catch (error: any) {
      console.error("Registration failed:", error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.response?.data?.message || "Something went wrong",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-purple-600 to-purple-800">
      {/* Left side content */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="text-white max-w-md mx-auto">
          <h1 className="text-5xl font-bold mb-4">Register Now</h1>
          <p className="text-xl mb-6">
            Join us for an unforgettable experience!
          </p>
          {/* <p className="text-lg opacity-80">
            Complete the registration form to secure your spot at our upcoming
            event. Don't miss this opportunity to connect with industry leaders
            and gain valuable insights.
          </p> */}
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-900 border-gray-800 shadow-xl">
          {/* <CardHeader>
            <CardTitle className="text-white">Event Registration</CardTitle>
            <CardDescription className="text-gray-400">
              Fill out the form below to register
            </CardDescription>
          </CardHeader> */}

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="First Name"
                          className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Last Name"
                          className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Job Title */}
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Job Title"
                          className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Company */}
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Company"
                          className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Mobile Number */}
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Mobile Number"
                          className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Email Address */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email Address"
                          type="email"
                          className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Company Website URL */}
                <FormField
                  control={form.control}
                  name="companyWebsite"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Company Website URL"
                          className="bg-gray-800 border-gray-700 text-white focus:border-purple-500"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription className="text-gray-500 text-xs">
                        Optional: Enter your company website URL
                      </FormDescription> */}
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Terms Agreement */}
                <FormField
                  control={form.control}
                  name="agree"
                  render={({ field }) => (
                    <FormItem className="flex flex-row  space-x-3 space-y-0 mt-4 items-center">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-gray-300 text-sm font-normal block">
                          By filling out the registration form to attend our
                          event, you agree and consent to{" "}
                          <a
                            href="#"
                            className="text-purple-400 hover:text-purple-300"
                          >
                            Cogent Solutions Privacy Policy
                          </a>
                          .
                        </FormLabel>
                        <FormMessage className="text-red-400" />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 h-12 mt-6"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Register"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
