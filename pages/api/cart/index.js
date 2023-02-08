import { ConnectDb } from "../../../DB/ConnectDb";
import Cart from "../../../models/CartSchema";

export default async (req, res) => {
  await ConnectDb();
  switch (req.method) {
    case "POST":
      console.log("newCart");
      if (!req.body) {
        res.status(400).json({ error: "Please fill the value" });
      }
      try {
        const newCart = await new Cart({
          productId: req.body.productId,
          quantity: req.body.quantity,
        });
        const cart = await newCart.save();
        res.status(201).json({ data: cart });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }

    case "GET":
      try {
        const products = await Cart.find({}).populate("productId").exec();
        // const filterProduct = products.filter((p) => p.quantity <= 0);
        // const deleteProduct =
        //   filterProduct.length > 0 &&
        //   (await Cart.findByIdAndDelete({
        //     _id: filterProduct[0]._id,
        //   }));
        // const sortProduct = await Cart.find({}).populate("productId").exec();
        res.status(200).json({ data: products });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }

    // case "DELETE":
    //   try {
    //     const deleteProducts = await Cart.deleteMany({ quantity: { $gt: 0 } });
    //     res.status(200).json({ message: "you delete all the data" });
    //   } catch (error) {
    //     res.status(400).json({ message: error.message });
    //   }
  }
};
