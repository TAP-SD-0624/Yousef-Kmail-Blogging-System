import express from "express";
const app = express();
import sequelize from "./Database/connection";
import UserRouter from "./Routes/UserRouter";
import bodyParser from "body-parser";

app.use(bodyParser.json());

app.use(express.json());

app.use("/api/user", UserRouter);

sequelize.authenticate().then(() => {
  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
});
