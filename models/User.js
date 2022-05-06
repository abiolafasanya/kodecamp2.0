import mongoose from "mongoose";
const { Schema, model } = mongoose;

// product Schema
const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        immutable: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
  },
  { timestamps: true }
);

const userModel = model("users", userSchema);
export default userModel;
