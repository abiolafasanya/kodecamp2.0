import { Router } from "express";
import auth from "../middleware/auth.js";

import {
  allProduct,
  addProduct,
  getProduct,
  updateProduct,
  removeProduct,
  filterName,
  filterCategory,
} from "../controller/productController.js";

const router = Router();

router.get("/", allProduct);
router.post("/", auth, addProduct);
router.get("/:id", getProduct);
router.put("/:id", auth, updateProduct);
router.get("/name/:name", filterName);
router.get("/category/:category", filterCategory);
router.delete("/:id", auth, removeProduct);

export default router;
