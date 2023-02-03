import { ConnectDb } from "../../../DB/ConnectDb";
import Cat from "../../../models/CatSchema";

export default async function categoryApi(req, res) {
  await ConnectDb();
  switch (req.method) {
    case "POST":
      if (!req.body) {
        res
          .status(400)
          .json({ message: "Invalid Inputs!! Please fill the correct data" });
      }
      try {
        const createCategory = await new Cat({ name: req.body.name });
        const category = await createCategory.save();
        res.status(201).json({ data: category });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    case "GET":
      try {
        const category = await Cat.find({}).exec();
        res.status(200).json({ data: category });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    default:
      res.status(400).json({ message: "NO Match for Your Request" });
  }
}
