import mongoose from "mongoose";
const { Schema, model } = mongoose;

// product Schema
const productSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      tirm: true,
    },
    category: {
      type: String,
      default: 'unknown',
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    addedBy: {
      type: String,
      default: 'unknown',
      trim: true,
    },
  },
  { timestamps: true }
);

const productModel = model("products", productSchema);
export default productModel;
