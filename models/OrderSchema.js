import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const OrderSchema = new mongoose.Schema({
  product: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Cart",
    required: [true, "Cart is required"],
  },
  name: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
  email: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
  address: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
  ZIPCode: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
  city: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
  country: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);
export default Order;
