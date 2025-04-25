import { User } from "./user.model";

export const createUserToDB = async () => {
  const user = new User({
    name: {
      firstName: "John",
      lastName: "Doe",
      middleName: "Smith",
    },
    role: "student",
    gender: "male",
    id: "1236",
    dateOfBirth: " 2023-01-01",
    contactNo: "1234567890",
    emergencyContactNo: "0987654321",
    age: 25,
    email: "osafridi00@gmail.com",
    presentAddress: "123 Main St",
    permanentAddress: "456 Elm St",
  });
  return user;
};
