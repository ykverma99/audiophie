import { ConnectDb } from "../../../DB/ConnectDb";
import Product from "../../../models/ProductSchema";

export default async function product(req, res) {
  await ConnectDb();
  switch (req.method) {
    case "PUT":
      try {
        const product = await Product.findByIdAndUpdate(
          { _id: req.query.id },
          {
            name: req.body.name,
            category: req.body.category,
            desc: req.body.desc,
            price: req.body.price,
            quantity: req.body.quantity,
            mainImg: req.body.mainImg,
            images: req.body.images,
            about: req.body.about,
            inBox: req.body.inBox,
            newProduct: req.body.newProduct,
          }
        ).exec();
        res.status(201).json({ message: "Your change is done!!" });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    case "GET":
      try {
        const product = await Product.findById({
          _id: req.query.id,
        })
          .populate("category")
          .exec();

        res.status(200).json({ data: product });
      } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
      }
      break;
    case "DELETE":
      try {
        const productDelete = await Product.findByIdAndDelete({
          _id: req.query.id,
        });
        res
          .status(201)
          .json({ message: `You Deleted ${req.query.name} product!!` });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    default:
      res.status(400).json({ message: "NO Match for Your Request" });
  }
}
