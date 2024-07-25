import express from "express";
const app = express();
import sequelize from "./Database/connection";
import bodyParser from "body-parser";
import { PostRouter, UserRouter } from "./Routes";

app.use(bodyParser.json());

app.use(express.json());

app.use("/api/user", UserRouter);
app.use("/api/blog", PostRouter);

sequelize.authenticate().then(() => {
  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
});
