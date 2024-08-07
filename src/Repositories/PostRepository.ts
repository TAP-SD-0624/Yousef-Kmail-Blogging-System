import Post from "../Database/models/post";
import { IPostRepository } from "../Interfaces/Repositories/IPostRepository";
import { Repository } from "./Repository";

export class PostRepository
  extends Repository<Post>
  implements IPostRepository<Post> {}
