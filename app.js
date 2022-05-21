import express, { json, urlencoded } from "express";
import morgan from "morgan";
import Database from "./src/configs/db.js";
import config from "./src/configs/config.js";
import { erroHandler } from "./src/configs/helpers.js";
import productRouter from "./src/api/routers/productRoute.js";
import userRouter from "./src/api/routers/usersRoute.js";
import authRouter from "./src/api/routers/authRoute.js";
import cookieParser  from "cookie-parser";

const app = express();
Database(config.local_mongodb_uri);

//use
app.use(json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(erroHandler);
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/", (req, res) => {
  res.cookie("hello", "this is cookies in action")
  res.send("<h2>Ecommerce App</h2>");
});

app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);

app.set("port", config.port || 3000);
app.listen(app.get("port"), () => {
  consola.info(`🚕 Driving on port ${app.get("port")}`);
});
