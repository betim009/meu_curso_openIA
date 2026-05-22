import { Router } from "express";
import { usersRoutes } from "../modules/users/user.routes.js";
import { productsRoutes } from "../modules/products/product.routes.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const routes = Router();

routes.get("/health", (req, res) => res.json({ ok: true }));
routes.use("/users", usersRoutes);
routes.use("/products", authMiddleware, productsRoutes);
