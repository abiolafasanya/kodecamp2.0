import { Router } from "express";
import auth from "../middleware/auth.js";
import check from "../middleware/validation.js";

import controller from "../controller/usersController.js";
const router = Router();

// authControler
router.post("/register", controller.register);
router.post("/login", controller.logIn);
router.get("/logout", controller.logOut);
router.get("/refresh", controller.requestToken);

// usersController
router.get("/", auth, controller.allUsers);
router.get("/:id", auth, controller.findUser);
router.put("/update/:id", auth, controller.updateUser);
router.get("/activate/:id", auth, controller.activateUser);
router.delete("/deactivate/:id", auth, controller.deactivateUser);
router.put("/reset-password/:email", controller.updatePassword);

export default router;
