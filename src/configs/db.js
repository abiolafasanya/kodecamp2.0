import mongoose from "mongoose";
import consola from "consola"
const {success} = consola

async function connect(uri) {
  try {
    await mongoose.connect(uri || "mongodb://localhost:27017/test");
    success({message: "Connected to MongoDB 🚀"});
  } catch (error) {
    console.log(error);
  }
}

export default connect;
