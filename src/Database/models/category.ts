import {
  AllowNull,
  AutoIncrement,
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Post from "./post";
import PostCategory from "./postcategory";

@Table({
  tableName: "categories",
  timestamps: true,
})
class Category extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @BelongsToMany(() => Post, () => PostCategory)
  posts!: Post[];
}

export default Category;
