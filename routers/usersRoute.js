import { Router } from "express";

const router = Router();

import {
  register,
  updateUser,
  findUser,
  allUsers,
  deactivateUser,
  activateUser,
} from "../controller/usersController.js";

/**
 * @param allUsers http://localhost:{port}/
 * gets all users from the database
 * @param findUser http://localhost:{port}/:id
 * gets a single user by id from the database
 * @param register http://localhost:{port}/register
 * create or register a new user
 * @param updateUser http://localhost:{port}/update/:id
 * updates users record based on user id
 * @param deactivateUser http://localhost:{port}/deactivate/:id
 * changes the status of the user to deactivated
 *  @param activateUser http://localhost:{port}/activate/:id
 * changes the status of the user to activated
 */
router.get("/", allUsers);
router.get("/:id", findUser);
router.post("/register", register);
router.put("/update/:id", updateUser);
router.get("/activate/:id", activateUser);
router.delete("/deactivate/:id", deactivateUser);

export default router;
