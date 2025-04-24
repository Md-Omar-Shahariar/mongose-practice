import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { Schema } from "mongoose";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

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
export default app;
