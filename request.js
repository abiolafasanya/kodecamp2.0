const fs = require("fs");
const path = require("path");
const { log } = require("console");

exports.requesListener = function (req, res) {
  if (req.url == "/home") {
    res.writeHead(301, { Location: "http://" + req.headers["host"] + "/" });
    res.end();
  } else if (req.url == "/") {
    fs.readFile(path.resolve("./view/index.html"), (err, page) => {
      if (err) return console.error(err);
      res.writeHead(200, { "content-type": "text/html" });
      res.end(page);
      log(`Serving page ${req.url}`);
    });
  } else if (req.url == "/about") {
    fs.readFile(path.resolve("./view/about.html"), (err, page) => {
      if (err) return console.error(err);
      res.writeHead(200, { "content-type": "text/html" });
      res.end(page);
      log(`Serving page ${req.url}`);
    });
  } else if (req.url == "/contact") {
    fs.readFile(path.resolve("./view/contact.html"), (err, page) => {
      if (err) return console.error(err);
      res.writeHead(200, { "content-type": "text/html" });
      res.end(page);
      log(`Serving page ${req.url}`);
    });
  } else {
    fs.readFile(path.resolve("./view/error.html"), (err, page) => {
      if (err) return console.error(err);
      res.writeHead(404, { "content-type": "text/html" });
      res.end(page);
      log(`Page ${req.url} not found `);
    });
  }
};
