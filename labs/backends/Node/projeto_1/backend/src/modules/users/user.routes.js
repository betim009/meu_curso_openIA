import { Router } from "express";
import { userController } from "./user.controller.js";

export const usersRoutes = Router();

usersRoutes.post("/", userController.create);
usersRoutes.get("/", userController.list);
usersRoutes.get("/:id", userController.getById);
usersRoutes.put("/:id", userController.update);
usersRoutes.delete("/:id", userController.remove);
