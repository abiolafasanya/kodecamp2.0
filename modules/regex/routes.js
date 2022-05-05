import { Router } from "express";
import {
  getAllProduct,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
} from "./controller.js";

const router = Router();

router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:search", searchProduct);

export default router;
