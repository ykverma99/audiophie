import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const CartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Product",
    required: [true, "Product is required"],
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
export default Cart;
