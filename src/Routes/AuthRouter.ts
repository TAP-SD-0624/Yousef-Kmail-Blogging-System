import { Router } from "express";
import { isExportDeclaration } from "typescript";
import { Login, Signup } from "../Controllers/AuthController";

const AuthRouter = Router();

AuthRouter.post("/login", Login);
AuthRouter.post("/signup", Signup);

export default AuthRouter;
