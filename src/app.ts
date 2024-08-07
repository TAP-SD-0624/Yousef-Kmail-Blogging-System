import express from "express";
const app = express();
import sequelize from "./Database/connection";
import bodyParser from "body-parser";
import { AuthRouter, PostRouter, UserRouter } from "./Routes";
import { AuthenticateUser } from "./Middlewares/Authentication/Authentication";
app.use(bodyParser.json());

app.use(express.json());

app.use("/api/user", AuthenticateUser, UserRouter);
app.use("/api/blog", AuthenticateUser, PostRouter);
app.use("/api/auth", AuthRouter);

sequelize.authenticate().then(() => {
  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
});
