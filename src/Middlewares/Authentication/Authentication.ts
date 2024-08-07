import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const AuthenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { token } = req.headers;
  console.log(token);
  if (!token) return res.status(403).json({ error: "unauthorized" });
  try {
    let jwttoken = (token as string).split(" ")[1];
    let username = verify(jwttoken, "mysecretkey");
    next();
  } catch (e) {
    res.status(403).json({ error: "unauthorized" });
  }
};
