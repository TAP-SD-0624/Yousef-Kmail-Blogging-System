import {
  AfterCreate,
  AllowNull,
  AutoIncrement,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import User from "./user";
import Category from "./category";
import PostCategory from "./postcategory";
import Comment from "./comment";
import SoftDeleteModel from "../models_Base/SoftDeleteModel";

@Table({
  tableName: "posts",
  timestamps: true,
})
class Post extends SoftDeleteModel {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @AllowNull(false)
  @Column(DataType.STRING)
  content!: string;

  @HasMany(() => Comment, {
    sourceKey: "id",
    foreignKey: "post_id",
    constraints: false,
  })
  comments!: Comment[];

  @BelongsToMany(() => Category, () => PostCategory)
  categories!: Category[];
}

export default Post;
