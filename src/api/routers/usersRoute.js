import { Router } from "express";
import auth from "../middleware/auth.js";
import { isActive } from "../middleware/validation.js";

import {
  updateUser,
  findUser,
  allUsers,
  deactivateUser,
  activateUser,
  updatePassword,
} from "../controller/usersController.js";
const router = Router();

router.get("/", auth, allUsers);
router.get("/:id", auth, findUser);
router.put("/update/:id", auth, updateUser);
router.get("/activate/:id", auth, activateUser);
router.delete("/deactivate/:id", auth, deactivateUser);
router.put("/reset-password/:email", updatePassword);

export default router;
