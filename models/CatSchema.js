import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

mongoose.Promise = global.Promise;

const CatSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Categories is required"],
  },
});

const Cat = models.Cat || model("Cat", CatSchema);
export default Cat;
