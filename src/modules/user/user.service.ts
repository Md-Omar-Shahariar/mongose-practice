import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User({ ...payload });
  user.save();
  return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const user = User.find({});
  return user;
};
