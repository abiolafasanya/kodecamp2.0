import Model from "../models/Product.js";
import jwt from "jsonwebtoken";
import {config} from "dotenv";
config()

export const allProduct = async (req, res) => {
  try {
    const data = await Model.find().sort({price: 'desc'});
    data.length > 0
      ? res
          .status(200)
          .json({ ok: true, data, message: "products retrieved 😇" })
      : res.status(404).json({ ok: false, message: "no product found ❗😒" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const data = await Model.find({ _id: req.params.id }).sort({price: 'desc'});
    data.length > 0
      ? res.status(200).json({ ok: true, data, message: "found product 😇" })
      : res
          .status(404)
          .json({
            ok: false,
            message: "failed to retreive product | not found ❗😒",
          });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    console.log('added by ', req.user.payload.name)
    let {name, description, category, price} = req.body
    const product = {
      name, description, category, price, addedBy: req.user.payload.name,
    }
    const data = await Model.create(product);
    data
      ? res.status(200).json({ ok: true, data, message: "Product added 😊" })
      : res
          .status(400)
          .json({ ok: false, data, message: "Failed to add product ❗" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    const data = await Model.updateOne(id, req.body);
    data
      ? res.status(200).json({
          ok: true,
          message: `Product with ID: ${req.params.id} has been updated 😇`,
        })
      : res
          .status(400)
          .json({ ok: false, message: `product update failed ❗😒` });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    const data = await Model.deleteOne(id);
    data
      ? res.status(200).json({
          ok: true,
          message: `product Id: ${req.params.id} has been deleted`,
        })
      : res.status(400).json({
          ok: false,
          message: "⚠ Encounterd an error while deleting ⚠",
        });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const filterName = async (req, res) => {
  try {
    console.log(req.params.name);
    // let query = { name: { '$regex' : req.params.name, '$options' : 'i' }};
    let query = {
      name: { $regex: req.params.name, $options: "i" }
    };
    console.log(query);
    const data = await Model.find(query).sort({ price: "desc" });
    data.length === 0
      ? res.status(404).json({ ok: false, message: "No product found ❗" })
      : res.status(200).json({ ok: true, data });
  } catch (error) {
    console.error(error);
  }
};

export const filterCategory = async (req, res) => {
  try {
    console.log(req.params.category);
    // let query = { category: { '$regex' : req.params.category, '$options' : 'i' }};
    let query = {
      category: { $regex: req.params.category, $options: "i" }
    };
    console.log(query);
    const data = await Model.find(query).sort({ price: "desc" });
    data.length === 0
      ? res.status(404).json({ ok: false, message: "No product found ❗" })
      : res.status(200).json({ ok: true, data });
  } catch (error) {
    console.error(error);
  }
};
