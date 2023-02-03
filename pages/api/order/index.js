import { ConnectDb } from "../../../DB/ConnectDb";
import Order from "../../../models/OrderSchema";

export default async (req, res) => {
  await ConnectDb();
  switch (req.method) {
    case "POST":
      if (!req.body) {
        res.status(400).json({ error: error.message });
      }
      const {
        product,
        name,
        email,
        phoneNumber,
        address,
        ZIPCode,
        country,
        city,
      } = req.body;
      try {
        const order = await new Order({
          product,
          name,
          email,
          phoneNumber,
          address,
          country,
          city,
          ZIPCode,
        });
        const saveOrder = await order.save();
        res.status(201).json({ data: saveOrder });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }

    case "GET":
      try {
        const order = await Order.find({})
          .populate({ path: "product", populate: { path: "productId" } })
          .exec();

        res.status(200).json({ data: order });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  }
};
