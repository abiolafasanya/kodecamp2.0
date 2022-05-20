import { Router } from "express";
import auth from "../middleware/auth.js";

import {
  sigin,
} from "../controller/authController.js";
const router = Router();

router.post("/login", sigin);

export default router;
