const path = require("path");
const config = require(path.resolve("./configs/config"));
const consola = require("consola");
const mongoose = require("mongoose");

class Database {
  mongodb() {
    let retry = 0;
    const connect = async (conString) => {
      consola.info("Initiating MongoDB connection...");

      return mongoose.connect(
        conString || config.mongodb_uri,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err) => {
          let retry = 0;
          if (err) {
            if (retry !== 3) {
              retry++;
              if (retry > 1) consola.info("Retrying again in 5 seconds...");
              else consola.info("Retrying in 5 seconds...");
              setTimeout(() => connect(conString || config.mongodb_uri), 5000);
            } else {
              consola.info("Attempting to connect locally...");
              setTimeout(() => connect(config.local_mongodb_uri), 5000);
            }
          } else consola.success("Mongodb connected successfully 🚀");
        }
      );
    };
    return { connect };
  }
}

module.exports = Database;
