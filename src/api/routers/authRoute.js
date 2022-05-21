import { Router } from "express";
import auth from "../middleware/auth.js";
import { isActive } from "../middleware/validation.js";

import {
  register,
  logIn,
  logOut,
  requestToken,
} from "../controller/authController.js";
const router = Router();

router.post("/register", register);
router.post("/login", logIn);
router.get("/logout", logOut);
router.get("/refresh", requestToken);

export default router;
