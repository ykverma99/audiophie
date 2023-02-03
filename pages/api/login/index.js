import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../../models/UserSchema";
import { serialize } from "cookie";
import { ConnectDb } from "../../../DB/ConnectDb";

export default async function (req, res) {
  if (req.method === "POST") {
    await ConnectDb();
    const { email, password } = req.body;
    if (!req.body) {
      return res.status(400).json({ message: "Invalid Input" });
    }

    try {
      const findUser = await User.findOne({ email: email });
      const passwordd = findUser.password;
      if (findUser) {
        const checkPassword = await bcrypt.compare(password, passwordd);
        if (checkPassword) {
          const token = jwt.sign(
            { _id: findUser._id, isAdmin: findUser.isAdmin },
            process.env.JWT_TOKEN,
            {
              expiresIn: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            }
          );
          const serialised = serialize("Auth", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
            secure: process.env.NODE_ENV === "production",
          });
          res.setHeader("set-Cookie", serialised);
          const user = await User.findById({ _id: findUser._id }).select(
            "-password -confirmPassword"
          );
          res.status(200).json({ data: user });
        }
        return res
          .status(400)
          .json({ message: "Please fill the corect value" });
      }
      return res.status(400).json({ message: "No User found" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
