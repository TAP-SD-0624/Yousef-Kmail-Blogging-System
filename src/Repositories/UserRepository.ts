import User from "../Database/models/user";
import { IRepository } from "../Interfaces/Repositories/IRepository";
import { IUserRepository } from "../Interfaces/Repositories/IUserRepository";
import { Repository } from "./Repository";

export class UserRepository
  extends Repository<User>
  implements IUserRepository<User> {}
