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

export const getUserByIdFromDB = async (id: string): Promise<IUser | null> => {
  const user = User.findOne({ id: id }, { name: 1, role: 1, _id: 0 });
  const user1 = new User({
    name: { firstName: "po", lastName: "Doe", middleName: "Smith" },
  });
  console.log(user1.getFullName());
  return user;
};
