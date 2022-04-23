const express = require("express");

const router = express.Router();

const {
  allProduct,
  addProduct,
  getProduct,
  updateProduct,
  removeProduct,
} = require("../controller/productController");

router.get("/", allProduct);
router.post("/", addProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", removeProduct);

module.exports = router;
