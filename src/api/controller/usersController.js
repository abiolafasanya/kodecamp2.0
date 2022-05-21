import Model from "../models/User.js";
import bcrypt from "bcrypt";
import {
  deactivated,
  pwdUpdateValidate,
  updateValidate,
} from "../../api/utils/validation.js";

import authController from "./authController.js";

class userController extends authController {
  static allUsers = async (req, res) => {
    let users = await Model.find({ isDeleted: false }).sort({
      createdAt: "desc",
    });
    // checking length of user
    if (users.length > 0) {
      res.status(200).json({
        ok: true,
        users,
        message: users.length + " Found users 🧑",
      });
    } else {
      res.status(404).json({ ok: false, message: " users not found 😭" });
    }
  };

  // Read single Users
  static findUser = async (req, res) => {
    // if user is not deactivated or deleted find user
    let user = await Model.findOne({ _id: req.params.id }).sort({
      createdAt: "desc",
    });
    user
      ? res.status(200).json({
          ok: true,
          user,
          message: "Found user 🧑",
        })
      : res.status(404).json({ ok: false, message: "user not found 😭" });
  };

  // update user record
  static updateUser = async (req, res) => {
    try {
      let id = { _id: req.params.id };
      // validation for input
      let { error, value } = updateValidate.validate(req.body);
      if (error) {
        console.error(error.message);
        res
          .status(400)
          .json({ message: "validation failed", error: error.message });
      }
      let { firstname, lastname } = value;
      const updateUser = { firstname, lastname };
      let user = await Model.findOneAndUpdate(id, updateUser, { new: true });
      user
        ? res.status(201).json({
            ok: true,
            user,
            message: "User update successful 😇",
          })
        : res.status(400).json({
            ok: false,
            message: "❗ Error encountered while updating user",
          });
    } catch (error) {
      console.error(error.message);
    }
  };

  // deactivate user account
  static deactivateUser = async (req, res) => {
    try {
      let status = await deactivated({ _id: req.params.id });

      let user = await Model.findOneAndUpdate(
        { _id: req.params.id },
        { isDeleted: true },
        { new: true }
      );
      user
        ? res.status(200).json({
            ok: true,
            message: "Account has been deactivated",
          })
        : res.status(401).json({
            ok: false,
            message: "error encountered while deactivating account...",
          });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  };

  // activate user account
  static activateUser = async (req, res) => {
    try {
      let status = await deactivated({ _id: req.params.id });
      if (status) {
        let user = await Model.findOne({ _id: req.params.id });
        if (!user) {
          res.status(404).json({ error: "user not found" });
          return;
        } else {
          user.isDeleted = false;
          let result = await user.save();
          if (!result) return;
          res.status(200).json({
            ok: true,
            user,
            message: "Your account has been activated",
          });
        }
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  };

  // update user password
  static updatePassword = async (req, res) => {
    try {
      // check if user exists
      let checkUser = await Model.findOne({ email: req.params.email });
      if (!checkUser)
        return res.status(401).json({ message: "user not found" });
      let userID = checkUser._id;
      console.log("User Id is:", userID);
      // validate input with joi
      let { error, value } = pwdUpdateValidate.validate(req.body);
      if (error) {
        console.error(error.message);
        res
          .status(400)
          .json({ message: "validation failed ⚠", error: error.message });
      }
      let { password } = value;
      // hashing password
      password = await bcrypt.hash(password, 10);
      // find the user and update
      let user = await Model.findOneAndUpdate(
        { _id: userID },
        { password: password },
        { new: true }
      );
      if (user) {
        res.status(200).json({
          ok: true,
          user,
          message: "password successfully updated ✌",
        });
      } else
        res.status(400).json({
          message: "password update failed❗",
        });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  };
}

export default userController;
