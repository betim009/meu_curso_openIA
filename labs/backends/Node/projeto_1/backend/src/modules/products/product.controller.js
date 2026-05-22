import { productService } from "./product.service.js";
import {
  createProductSchema,
  updateProductSchema,
  productIdSchema,
} from "./product.validation.js";

export const productController = {
  async create(req, res, next) {
    try {
      const data = createProductSchema.parse(req.body);
      const product = await productService.create(data);
      return res.status(201).json(product);
    } catch (err) {
      return next(err);
    }
  },

  async list(req, res, next) {
    try {
      const products = await productService.list();
      return res.json(products);
    } catch (err) {
      return next(err);
    }
  },

  async getById(req, res, next) {
    try {
      const { id } = productIdSchema.parse(req.params);
      const product = await productService.getById(id);
      return res.json(product);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = productIdSchema.parse(req.params);
      const data = updateProductSchema.parse(req.body);
      const product = await productService.update(id, data);
      return res.json(product);
    } catch (err) {
      return next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const { id } = productIdSchema.parse(req.params);
      await productService.remove(id);
      return res.status(204).send();
    } catch (err) {
      return next(err);
    }
  },
};
