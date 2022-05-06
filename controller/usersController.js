import Model from "../models/User.js";
import joi from "joi";
import bcrypt from "bcrypt";

export const findUser = async (req, res) => {
  let query = { _id: req.params.id };
  let user = await Model.findOne({ query }).sort({ createdAt: "desc" });
  user.length > 0
    ? res.status(200).json({
        ok: true,
        user,
        message: "Found user 🧑",
      })
    : res.status(404).json({ ok: false, message: "user not found 😭" });
};

export const allUsers = async (req, res) => {
  let user = await Model.find({}).sort({ createdAt: "desc" });
  user.length > 0
    ? res.status(200).json({
        ok: true,
        user,
        message: "Found users 🧑",
      })
    : res.status(404).json({ ok: false, message: "users not found 😭" });
};

export const createUser = async (req, res) => {
  const objSchema = joi.object({
    firstname: joi.string(),
    lastname: joi.string(),
    email: joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: joi.string().pattern(/^[\w@#&+-.]/),
  });

  try {
    let { error, value } = objSchema.validate(req.body);
    if (error) {
      console.error(error.message);
      res.status(400).json({ message: "validation failed", error: error.message});
    }
    // continue if validation passed
    let { firstname, lastname, email, password } = value;
    password = await bcrypt.hash(password, 10);
    const newUser = { firstname, lastname, email, password };
    let user = await Model.create(newUser);
    user
      ? res.status(201).json({
          ok: true,
          user,
          message: "New user created 😇",
        })
      : res.status(400).json({
          ok: false,
          message: "❗ Error encountered while creating new user",
        });
  } catch (error) {
    console.error(error.message);
  }
};

/**
 * some field has been set to immutable that are not
 * updateable because if has been set to immutable in the model
 */
export const updateUser = async (req, res) => {
  const objSchema = joi.object({
    firstname: joi.string(),
    lastname: joi.string(),
  });
  try {
    let data = await objSchema.validateAsync(req.body);
    let { firstname, lastname } = data;
    const updateUser = { firstname, lastname };
    let id = { _id: req.params.id };
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
export const deleteUser = async (req, res) => {};
export const resetPassword = async (req, res) => {};
export const forgotPassword = async (req, res) => {};
