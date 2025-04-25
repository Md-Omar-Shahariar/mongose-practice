import { NextFunction, Request, Response } from "express";
import { createUserToDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUserToDB();
    await user.save();
    res.status(200).json({
      status: "success",
      data: user,
    });
    next();
  } catch (error) {
    console.log(error);
  }
};
