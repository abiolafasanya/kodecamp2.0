import express, { json } from "express";
import { erroHandler } from "./utils/helpers.js";
import morgan from "morgan";
import regexRouter from "./modules/regex/routes.js";
import connect from "./utils/database.js";
// initalize express app

const app = express();

// use
connect();
app.use(json());
app.use(erroHandler);
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// routes
app.use("/regex", regexRouter);

// set
app.set("port", 4000);
// listen
app.listen(app.get("port"), () =>
  console.log(`app is listening on port ${app.get("port")}`)
);
