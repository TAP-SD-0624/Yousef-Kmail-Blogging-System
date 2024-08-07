import { NextFunction, Request, Response } from "express";
import { GenerateToken } from "../Utils/JwtUtils";

export const Login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username && !password) {
    return res
      .status(400)
      .json({ error: "Both username and password is required" });
  }
  if (username !== "yousef" && password !== "password")
    return res.status(401).json({ error: "Username or password is incorrect" });
  const token = GenerateToken({ username });
  res.status(200).json({ token: token });
};

export const Signup = (req: Request, res: Response, next: NextFunction) => {};
