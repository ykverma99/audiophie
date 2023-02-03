import mongoose from "mongoose";

export const ConnectDb = async () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connect"))
    .catch((e) => console.log(e));
};

require("../models/UserSchema");
require("../models/CatSchema");
require("../models/ProductSchema");
require("../models/CartSchema");
require("../models/OrderSchema");

// {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   },
