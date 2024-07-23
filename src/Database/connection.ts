import { Sequelize } from "sequelize-typescript";
import Post from "./models/post";
import Category from "./models/category";

const sequelize = new Sequelize({
  database: "database",
  username: "root",
  password: "password",
  port: 3306,
  dialect: "mysql",
  models: [__dirname + "/models"],
});

sequelize.sync({ alter: true });

Category.belongsToMany(Post, { through: "Category_Post" });
Post.belongsToMany(Category, { through: "Category_Post" });

export default sequelize;
