import { Sequelize } from "sequelize-typescript";
import "dotenv/config";

const sequelize = new Sequelize({
  database: process.env.DB,
  username: process.env.ROOT,
  password: process.env.PASSWORD,
  port: parseInt(process.env.DB_PORT || "3306"),
  dialect: "mysql",
  models: [__dirname + "/models"],
});

sequelize.sync({ alter: true });

export default sequelize;
