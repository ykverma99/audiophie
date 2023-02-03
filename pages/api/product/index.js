import { ConnectDb } from "../../../DB/ConnectDb";
import Product from "../../../models/ProductSchema";

export default async function productApi(req, res) {
  await ConnectDb();
  switch (req.method) {
    case "POST":
      if (!req.body) {
        res
          .status(400)
          .json({ message: "Invalid Inputs!! Please fill the correct data" });
      }
      const {
        name,
        category,
        desc,
        price,
        quantity,
        mainImg,
        images,
        about,
        inBox,
        newProduct,
      } = req.body;
      try {
        const createProduct = new Product({
          name,
          category,
          desc,
          price,
          quantity,
          mainImg,
          images,
          about,
          inBox,
          newProduct,
        });
        const product = await createProduct.save();
        res.status(201).json({ data: product });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    case "GET":
      try {
        const products = await Product.find({}).populate("category").exec();
        const query = products.filter(
          (p) => p.category?.name === req.query.category
        );
        const filter = req.query.category ? query : products;

        res.status(200).json({ data: filter });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    default:
      res.status(400).json({ message: "NO Match for Your Request" });
  }
}
