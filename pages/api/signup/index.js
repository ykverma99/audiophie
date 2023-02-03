import jwt from "jsonwebtoken";
import User from "../../../models/UserSchema";
import { ConnectDb } from "../../../DB/ConnectDb";
import { serialize } from "cookie";
const bcrypt = require("bcryptjs");

export default async function handler(req, res) {
  if (req.method === "POST") {
    await ConnectDb();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      mobileNumber,
    } = req.body;
    if (!req.body) {
      return res.status(400).json({ message: "Invalid Input" });
    }

    try {
      const pass = await bcrypt.hash(password, 12);
      const cPass = await bcrypt.hash(confirmPassword, 12);
      const findUser = await User.findOne({ email });
      if (findUser) {
        return res.status(400).json({ message: `Email is not valid` });
      }
      const userData = await new User({
        firstName,
        lastName,
        email,
        password: pass,
        confirmPassword: cPass,
        mobileNumber,
      });
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Incorrect Password" });
      }
      const token = jwt.sign(
        { _id: userData._id, isAdmin: userData.isAdmin },
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
      const saveUser = await userData.save();

      const user = await User.findById({ _id: userData._id }).select(
        "-password -confirmPassword"
      );
      res.status(201).json({ data: user });
    } catch (error) {
      return res.status(400).json({ message: "Invalid Input" });
    }
  }
}
