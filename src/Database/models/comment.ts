import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Post from "./post";
import User from "./user";
import SoftDeleteModel from "../models_Base/SoftDeleteModel";

@Table({
  tableName: "comments",
  timestamps: true,
})
class Comment extends SoftDeleteModel {
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

  @AllowNull(false)
  @ForeignKey(() => Post)
  @Column(DataType.INTEGER)
  post_id!: number;

  @BelongsTo(() => Post, {
    targetKey: "id",
    foreignKey: "post_id",
    constraints: false,
  })
  post!: Post;
}

export default Comment;
