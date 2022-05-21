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

router.use(auth)

router.get("/", allProduct);
router.post("/", addProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.get("/name/:name", filterName);
router.get("/category/:category", filterCategory);
router.delete("/:id", removeProduct);

export default router;
