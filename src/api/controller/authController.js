import Model from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { secretGenerator } from "../utils/helper.js";
import { loginValidation } from "../utils/validation.js";

console.log("secret key from validation:", secretGenerator());

export const sigin = async (req, res) => {
  try {
    let data = await loginValidation.validateAsync(req.body);
    let { email, password } = data;
    let user = await Model.findOne({ email: email }).select("+password");
    if (user.email !== email) return console.log("email is incorrect", email);
    // compare password
    let ifPassword = bcrypt.compareSync(password, user.password);
    if (ifPassword) {
      // sign in with jwt
      const payload = {
        id: user._id,
      };

      let token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });
      user.accessToken = token;
      user.save();

      return res.status(200).json({
          message: "You are signIn",
          token,
      })
    } else return console.log("password is incorrect", ifPassword);
  } catch (error) {
    console.log(error.message);
  }
};
