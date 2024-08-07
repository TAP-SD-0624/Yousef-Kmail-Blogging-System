import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Post from "./post";
import Category from "./category";
import SoftDeleteModel from "../models_Base/SoftDeleteModel";

@Table({
  tableName: "post_category",
  timestamps: true,
})
class PostCategory extends SoftDeleteModel {
  @AllowNull(false)
  @ForeignKey(() => Post)
  @Column(DataType.NUMBER)
  postId!: number;

  @AllowNull(false)
  @ForeignKey(() => Category)
  @Column(DataType.NUMBER)
  categoryId!: number;
}

export default PostCategory;
