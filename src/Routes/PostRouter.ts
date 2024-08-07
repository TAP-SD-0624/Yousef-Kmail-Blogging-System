import { Router } from "express";
import {
  AddCategoryToPost,
  CreateComment,
  CreateNewBlog,
  DeleteBlog,
  GetBlog,
  GetBlogs,
  GetCategories,
  GetComments,
} from "../Controllers/PostController";
const PostRouter = Router();
//#region Blogs apis
PostRouter.post("/post", CreateNewBlog);

PostRouter.get("/get/:id", GetBlog);

PostRouter.get("/getall", GetBlogs);

PostRouter.delete("/delete/:id", DeleteBlog);

//#endregion

//#region Category apis
PostRouter.post("/category/add", AddCategoryToPost);

PostRouter.get("/get/:id/categories", GetCategories);

//#endregion

//#region comments apis

//creating a new comment for a specific blog.
PostRouter.post("/comment", CreateComment);

//getting all comments for the post with {id}
PostRouter.get("/get/:id/comments", GetComments);

//#endregion

export default PostRouter;
