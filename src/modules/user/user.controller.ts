import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserFromDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const user = await createUserToDB(data);

    res.status(200).json({
      status: "success",
      data: user,
    });
    next();
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUserFromDB();

    res.status(200).json({
      status: "success",
      data: user,
    });
    next();
  } catch (error) {
    console.log(error);
  }
};
