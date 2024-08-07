import { Router } from "express";
import {
  CreateNewUser,
  DeleteUserById,
  GetAllUsers,
  GetUserById,
  UpdateUserById,
} from "../Controllers/UserController";

const UserRouter = Router();

UserRouter.get("/getall", GetAllUsers);
UserRouter.get("/get/:id", GetUserById);
UserRouter.delete("/delete/:id", DeleteUserById);
UserRouter.put("/put/:id", UpdateUserById);
UserRouter.post("/post", CreateNewUser);

export default UserRouter;
