export interface RegisterFormData {
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName: string;
  email: string;
  mobile: string;
  companyWebsite: string;
  createdAt: string;
  updatedAt: string[];
}

export const __constructorRegisterFormData = (
  data: RegisterFormData,
  old?: RegisterFormData
): RegisterFormData => {
  if (old) {
    return {
      companyName: data.companyName || old.companyName,
      email: data.email,
      firstName: data.firstName || old.firstName,
      lastName: data.lastName || old.lastName,
      jobTitle: data.jobTitle || old.jobTitle,
      mobile: data.mobile || old.mobile,
      companyWebsite: data.companyWebsite || old.companyWebsite,
      createdAt: old.createdAt,

      updatedAt: [...old.updatedAt, new Date().toISOString()],
    };
  }
  return {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: [new Date().toISOString()],
  };
};
