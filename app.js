require("dotenv").config();
const path = require('path')
const express = require("express");
const Database = require("./configs/db");
const config = require("./configs/config");
new Database().mongodb().connect(config.local_mongodb_uri);
const app = express(); // create an instance of express


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const ecommerceRouter = require("./routers/route");
app.use("/ecommerce", ecommerceRouter);

app.set("port", process.env.PORT || 3000);
app.listen(3000, () => {
  console.log(`Listening on port ${app.get("port")}`); // eslint-disable-line no-console
});
