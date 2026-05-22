import { Router } from "express";
import { productController } from "./product.controller.js";

export const productsRoutes = Router();

productsRoutes.post("/", productController.create);
productsRoutes.get("/", productController.list);
productsRoutes.get("/:id", productController.getById);
productsRoutes.put("/:id", productController.update);
productsRoutes.delete("/:id", productController.remove);
