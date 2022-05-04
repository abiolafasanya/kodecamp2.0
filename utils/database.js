import mongoose from "mongoose";

async function connect(uri) {
  try {
    await mongoose.connect(uri || "mongodb://localhost:27017/test");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

export default connect;
