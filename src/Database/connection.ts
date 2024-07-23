import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: "database",
  username: "root",
  password: "password",
  port: 3306,
  dialect: "mysql",
  models: [__dirname + "/models"],
});

sequelize.sync({ alter: true });

export default sequelize;
