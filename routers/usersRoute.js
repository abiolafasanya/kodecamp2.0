import { Router } from "express";

const router = Router();

import {
  createUser,
  updateUser,
  findUser,
  allUsers,
} from "../controller/usersController.js";

router.get("/", allUsers);
router.get("/:id", findUser);
router.post("/", createUser);
router.put("/:id", updateUser);

export default router;
