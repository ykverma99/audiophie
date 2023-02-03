import { ConnectDb } from "../../../DB/ConnectDb";
import Cat from "../../../models/CatSchema";

export default async function categoryApi(req, res) {
  await ConnectDb();
  switch (req.method) {
    case "PUT":
      try {
        const category = await Cat.findByIdAndUpdate(
          { _id: req.query.id },
          {
            name: req.body.name,
          }
        ).exec();
        res.status(201).json({ message: "Your change is done!!" });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    case "GET":
      try {
        const categories = await Cat.findById({
          _id: req.query.id,
        }).exec();
        res.status(200).json({ data: categories });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    case "DELETE":
      try {
        const categoryDelete = await Cat.findByIdAndDelete({
          _id: req.query.id,
        });
        res
          .status(201)
          .json({ message: `You Deleted ${categoryDelete.name} category!!` });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    default:
      res.status(400).json({ message: "NO Match for Your Request" });
  }
}
