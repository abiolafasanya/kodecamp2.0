import express, { json, urlencoded } from "express";
import morgan from "morgan";
import Database from "./configs/db.js";
import config from "./configs/config.js";
import { erroHandler } from "./configs/helpers.js";
import productRouter from "./routers/productRoute.js";
import userRouter from "./routers/usersRoute.js";

const app = express();
Database(config.local_mongodb_uri);

//use
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(erroHandler);
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/", (req, res) => {
  res.send('<h2>Ecommerce App</h2>');
});

app.use("/product", productRouter);
app.use("/user", userRouter);

app.set("port", config.port || 3000);
app.listen(app.get("port"), () => {
  consola.info(`🚕 Driving on port ${app.get("port")}`);
});
