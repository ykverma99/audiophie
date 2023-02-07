import { ConnectDb } from "../../../DB/ConnectDb";
import Cart from "../../../models/CartSchema";

export default async (req, res) => {
  await ConnectDb();
  switch (req.method) {
    case "PUT":
      try {
        const productUpdate = await Cart.findByIdAndUpdate(
          { _id: req.query.id },
          {
            quantity: req.body.quantity,
          }
        );
        if (productUpdate.quantity === 0) {
          const deleteCart = await Cart.findByIdAndDelete({
            _id: productUpdate._id,
          });
        }
        res.status(200).json({ message: "Your change is done" });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }

    case "GET":
      try {
        const singleProduct = await Cart.findById({ _id: req.query.id })
          .populate("productId")
          .exec();
        res.status(200).json({ data: singleProduct });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
  }
};
