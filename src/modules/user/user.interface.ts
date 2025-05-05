export interface IUser {
  name: {
    firstName: string;
    lastName: string;
    middleName: string;
  };
  role: "student";
  gender: "male" | "female";
  id: string;
  dateOfBirth?: string;
  contactNo: string | number;
  emergencyContactNo: string | number;
  age: number;
  email: string;
  presentAddress: string;
  permanentAddress: string;
}

export interface IUserMethods {
  getFullName(): string; // Method to get the full name of the user
}
