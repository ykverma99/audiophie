import mongoose, { models, model } from "mongoose";

// mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise;
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      // match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      minlength: 5,
    },
    confirmPassword: {
      type: String,
      required: true,
      minlength: 5,
    },
    mobileNumber: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
