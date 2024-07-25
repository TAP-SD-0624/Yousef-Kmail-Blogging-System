import { Request, Response } from "express";
import Category from "../Database/models/category";
import Post from "../Database/models/post";
import { ForeignKeyConstraintError } from "sequelize";
import Comment from "../Database/models/comment";

export const CreateNewBlog = async (req: Request, res: Response) => {
  const { user_id, content, categories } = req.body;

  try {
    let cats = await Promise.all(
      categories.map(async (title: any) => {
        const [category] = await Category.findOrCreate({
          where: { title: title.title },
        });
        return category;
      })
    );

    const post = await Post.create({ content, user_id });

    await post.$set("categories", cats);

    const result = await Post.findByPk(post.id, {
      include: {
        model: Category,
        through: {
          attributes: [],
        },
      },
    });

    return res.status(200).json({ post: result });
  } catch (e) {
    console.log(e);

    if (e instanceof ForeignKeyConstraintError)
      return res
        .status(400)
        .json({ error: (e as ForeignKeyConstraintError).message });
    else return res.status(500).json({ error: (e as any).message });
  }
};

export const GetBlog = async (req: Request, res: Response) => {
  const { id } = req.params;

  const post = await Post.findByPk(id, {
    include: [
      { model: Category, through: { attributes: [] } },
      { model: Comment },
    ],
    attributes: ["id", "content"],
  });
  res.status(200).json({ post });
};

export const CreateComment = async (req: Request, res: Response) => {
  const { content, post_id, user_id } = req.body;

  const comment = await Comment.create({ content, post_id, user_id });

  res.status(200).json({ comment });
};

export const GetBlogs = async (req: Request, res: Response) => {
  const posts = await Post.findAll({
    include: [
      { model: Category, through: { attributes: [] } },
      { model: Comment },
    ],
    attributes: ["id", "content"],
  });
  res.status(200).json({ posts });
};

export const DeleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Post.DeleteById(id);
    return res.status(204).json({});
  } catch (e) {
    return res.status(500).json({ error: "internal server error" });
  }
};

export const GetComments = async (req: Request, res: Response) => {
  const { id } = req.params;

  const comments = await Comment.findAll({
    where: {
      post_id: id,
      isDeleted: false,
    },
    attributes: { exclude: ["isDeleted"] },
  });

  res.status(200).json({ comments });
};

export const AddCategoryToPost = async (req: Request, res: Response) => {};
export const GetCategories = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  try {
    const post = await Post.findByPk(id, {
      include: [{ model: Category, through: { attributes: [] } }],
    });

    console.log(post);

    res.status(200).json({ categories: post ? post.categories : [] });
  } catch (e: any) {
    res.status(200).json({});
  }
};
