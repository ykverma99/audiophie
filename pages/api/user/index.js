// import jwt from "jsonwebtoken";
// import User from "../../../models/UserSchema";

// export default async (req, res) => {
//   switch (req.method) {
//     case "GET":
//       const jwtToken = req.cookies.Auth;

//       const verifyToken = jwt.verify(
//         jwtToken,
//         process.env.JWT_TOKEN,
//         async (err, result) => {
//           if (err) {
//             return res
//               .status(403)
//               .json({ message: "You are not authenticate" });
//           }
//           const user = await User.findOne({ _id: result._id });
//           console.log(user);
//         }
//       );
//   }
// };
