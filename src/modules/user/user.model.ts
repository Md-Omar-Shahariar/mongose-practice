import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

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

export const User = model<IUser>("User", userSchema);
