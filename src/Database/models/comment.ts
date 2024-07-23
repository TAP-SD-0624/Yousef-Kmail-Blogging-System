import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from "sequelize-typescript";
import Post from "./post";

@Table({
  tableName: "comments",
  timestamps: true,
})
class Comment extends Post {
  @AllowNull(false)
  @ForeignKey(() => Post)
  @Column(DataType.INTEGER)
  post_id!: number;

  @BelongsTo(() => Post)
  post!: Post;
}

export default Comment;
