import Model from "../models/User.js";
import bcrypt from "bcrypt";
import {
  createValidate,
  deactivated,
  pwdUpdateValidate,
  updateValidate,
} from "../../api/utils/validation.js";

import authController from "./authController.js";
// Read all Users
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
    // check if user is not deleted/deactivated
    let status = await deactivated({ _id: req.params.id });
    if (status)
      return res.status(400).json({
        message: "Your account has been deactivated",
      });
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
      //
      // check if user is not deleted/deactivated
      let status = await deactivated({ _id: req.params.id });
      if (status)
        return res.status(400).json({
          message: "Your account has been deactivated",
        });

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
      if (status)
        return res.status(400).json({
          message: "Your account is already deactivated",
        });
      let user = await Model.findOneAndUpdate(
        { _id: req.params.id },
        { isDeleted: true },
        { new: true }
      );
      // let user = await Model.findOneAndRemove({ _id: req.params.id });
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
          console.log("setting to false");
          let result = await user.save();
          console.log("saved to false");
          if (!result) return;
          res.status(200).json({
            ok: true,
            user,
            message: "Account has been activated",
          });
        }
        // let user = await Model.findOneAndRemove({ _id: req.params.id });
      } else {
        console.log("Account activated already");
        res.status(400).json({ message: "Account activated already" });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  };

  // update user password
  static updatePassword = async (req, res) => {
    try {
      // check if user is not deleted/deactivated
      let status = await deactivated({ email: req.params.email });
      if (status)
        return res.status(400).json({
          message: "Your account has been deactivated",
        });
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
