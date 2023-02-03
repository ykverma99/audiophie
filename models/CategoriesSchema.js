import { Schema, model, models } from "mongoose";

const CategoriesSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Category is required"],
    },
  },
  { timestamps: true }
);

const Categories = models.Categories || model("Categories", CategoriesSchema);

export default Categories;
