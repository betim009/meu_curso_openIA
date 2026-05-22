import { AppError } from "../../utils/AppError.js";
import { productRepository } from "./product.repository.js";

export const productService = {
  async create(data) {
    return productRepository.create(data);
  },

  async list() {
    return productRepository.list();
  },

  async getById(id) {
    const product = await productRepository.getById(id);
    if (!product) throw new AppError("Product not found", 404);
    return product;
  },

  async update(id, data) {
    const product = await productRepository.getById(id);
    if (!product) throw new AppError("Product not found", 404);
    return productRepository.update(id, data);
  },

  async remove(id) {
    const product = await productRepository.getById(id);
    if (!product) throw new AppError("Product not found", 404);
    await productRepository.remove(id);
  },
};
