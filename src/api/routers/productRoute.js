import { Router } from "express";

const router = Router();

import {
  allProduct,
  addProduct,
  getProduct,
  updateProduct,
  removeProduct,
  filterName,
  filterCategory,
} from "../controller/productController.js";

router.get("/", allProduct);
router.post("/", addProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.get("/name/:name", filterName);
router.get("/category/:category", filterCategory);
router.delete("/:id", removeProduct);

export default router;
