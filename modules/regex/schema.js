import mongoose from "mongoose";
const { model, Schema } = mongoose;

const Productschema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const product = model("Product", Productschema);
export default product;
