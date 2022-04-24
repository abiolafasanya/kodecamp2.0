require("dotenv").config();
const path = require("path");
const express = require("express");
const Database = require("./configs/db");
const config = require("./configs/config");
new Database().mongodb().connect(config.local_mongodb_uri);
const app = express(); // create an instance of express

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let div = `<div>
              <h1>Hello World! use 
              <a href="http://localhost:3000/product">http://localhost:3000/product</a>
               to test </h1>
            </div>`;
  res.send(div);
});

const productRouter = require("./routers/route");
app.use("/product", productRouter);

app.set("port", process.env.PORT || 3000);
app.listen(3000, () => {
  console.log(`Listening on port ${app.get("port")}`); // eslint-disable-line no-console
});
