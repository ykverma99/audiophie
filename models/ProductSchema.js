// import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cat",
      required: [
        true,
        "Category is required. Please choose one category for your product",
      ],
    },
    desc: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    mainImg: {
      type: String,
      // required:true
    },
    images: {
      type: [String],
    },
    about: {
      type: String,
    },
    inBox: [{ name: String, quantity: Number }],
    newProduct: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
