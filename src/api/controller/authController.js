import Model from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { generateAuthToken } from "../utils/helper.js";
import { loginValidation, createValidate } from "../utils/validation.js";

class authController {
  static register = async (req, res) => {
    try {
      let { error, value } = createValidate.validate(req.body);
      // joi error handler
      if (error) {
        console.error(error.message);
        return res
          .status(400)
          .json({ message: "validation failed", error: error.message });
      }
      // continue if validation passed
      let { firstname, lastname, email, password } = value;
      // hash password
      password = await bcrypt.hash(password, 10);
      const newUser = { firstname, lastname, email, password };
      // check if email exists
      let ifEmail = await Model.findOne({ email });
      if (ifEmail)
        return res
          .status(401)
          .json({ message: "Email Exists register with another" });
      // if email does not exists proceed to creating a new user
      let user = await Model.create(newUser);
      let getDbUser = await Model.findOne({ _id: user._id });
      user
        ? res.status(201).json({
            ok: true,
            user: getDbUser,
            message: "New user created 😇",
          })
        : res.status(400).json({
            ok: false,
            message: "❗ Error encountered while creating new user",
          });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ ok: false, message: error.message });
    }
  };

  static register = async (req, res) => {
    try {
      let { error, value } = createValidate.validate(req.body);
      // joi error handler
      if (error) {
        console.error(error.message);
        return res
          .status(400)
          .json({ message: "validation failed", error: error.message });
      }
      // continue if validation passed
      let { firstname, lastname, email, password } = value;
      // hash password
      password = await bcrypt.hash(password, 10);
      const newUser = { firstname, lastname, email, password };
      // check if email exists
      let ifEmail = await Model.findOne({ email });
      if (ifEmail)
        return res
          .status(401)
          .json({ message: "Email Exists register with another" });
      // if email does not exists proceed to creating a new user
      let user = await Model.create(newUser);
      let getDbUser = await Model.findOne({ _id: user._id });
      user
        ? res.status(201).json({
            ok: true,
            user: getDbUser,
            message: "New user created 😇",
          })
        : res.status(400).json({
            ok: false,
            message: "❗ Error encountered while creating new user",
          });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ ok: false, message: error.message });
    }
  };

  static logIn = async (req, res) => {
    try {
      let data = await loginValidation.validateAsync(req.body);
      let { email, password } = data;
      let user = await Model.findOne({ email }).select("+password");
      if (!user)
        return res.status(404).json({ ok: false, message: "user not found" });
      // compare password
      let ifPassword = bcrypt.compareSync(password, user.password);
      if (ifPassword) {
        const token = generateAuthToken(user._id);
        if (!token) return console.log("token is not generated");

        user.refreshToken = token.refreshToken;
        user.save();
        // set cookeis
        res.cookie("token", token.refreshToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24,
          sameSite: "Strict",
        });
        // send response
        return res.status(200).json({
          message: "You are signedIn",
          token: token.accessToken,
        });
      } else return console.log("password is incorrect", ifPassword);
    } catch (error) {
      console.log(error.message);
    }
  };

  static logOut = async (req, res) => {
    try {
      let user = await Model.findById(req.user._id);
      user.refreshToken = "";
      user.save();
      res.clearCookie("token");
      res.status(200).json({ message: "You are logOut" });
    } catch (error) {
      console.log(error.message);
    }
  };

  static requestToken = async (req, res) => {
    try {
      const cookies = req.cookies;
      if (!cookies)
        return res
          .status(400)
          .json({ message: "cookie is not found, SignIn first" });
      if (!cookies.token)
        return res.status(400).json({
          message: "cookie token is not found, SignIn first",
          token: cookies.token,
        });
      const refreshToken = cookies.token;
      const user = await Model.findOne({ refreshToken });
      if (!user) return res.status(401).json({ message: "Unauthorized" });
      const verify = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      if (!verify) return res.status(403).json({ message: "invalid token" });
      const token = generateAuthToken(user._id);
      if (!token)
        return res.status(400).json({ message: "token not generated" });
      user.refreshToken = token.refreshToken;
      user.save();
      res.status(200).json({
        message: "You are signIn",
        token: token.accessToken,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json(error.message);
    }
  };
}

export default authController;
