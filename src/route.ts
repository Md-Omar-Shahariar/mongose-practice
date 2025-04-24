import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  interface IUser {
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

  const userSchema = new Schema<IUser>({
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      middleName: { type: String, required: true },
    },
    role: { type: String, enum: ["student"], required: true },
    id: { type: String, required: true, unique: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    age: { type: Number, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    dateOfBirth: { type: String },
    email: { type: String },
    gender: { type: String, enum: ["male", "female"], required: true },
  });

  const User = model<IUser>("User", userSchema);

  const createUserToDB = async () => {
    const user = new User({
      name: {
        firstName: "John",
        lastName: "Doe",
        middleName: "Smith",
      },
      role: "student",
      gender: "male",
      id: "12345",
      dateOfBirth: " 2023-01-01",
      contactNo: "1234567890",
      emergencyContactNo: "0987654321",
      age: 25,
      email: "osafridi00@gmail.com",
      presentAddress: "123 Main St",
      permanentAddress: "456 Elm St",
    });
    await user.save();
    console.log(user);
  };
  createUserToDB();
});

export default app;
