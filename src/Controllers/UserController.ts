import { Request, Response } from "express";
import User from "../Database/models/user";
export const GetUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) res.status(200).json({ user });
  else res.status(404).json({});
};

export const DeleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const user = await User.findByPk(id);
  console.log(user);
  if (!user || user.isDeleted) {
    return res.status(404).json({ error: "User not found" });
  }
  user.isDeleted = true;
  await user.save();
  return res.status(204);
};

export const UpdateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await req.body;

  if (!data)
    return res.status(404).json({ error: "no data to update were provided" });

  const user = await User.findByPk(id);

  if (!user) return res.status(404).json({ error: "Not found" });

  user.set({ ...data });

  await user.save();
  return res.status(200).json({ user });
};

export const CreateNewUser = async (req: Request, res: Response) => {
  const data = req.body;

  const user = await User.create({ ...data });

  res.status(200).json({ user });
};

export const GetAllUsers = async (req: Request, res: Response) => {
  const users = await User.findAll({
    where: {
      isDeleted: false,
    },
  });

  res.status(200).json({ users });
};
