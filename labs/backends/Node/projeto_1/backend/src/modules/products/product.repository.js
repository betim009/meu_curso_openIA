import { prisma } from "../../database/prisma.js";

export const productRepository = {
  create(data) {
    return prisma.product.create({ data });
  },

  list() {
    return prisma.product.findMany({ orderBy: { id: "asc" } });
  },

  getById(id) {
    return prisma.product.findUnique({ where: { id } });
  },

  update(id, data) {
    return prisma.product.update({ where: { id }, data });
  },

  remove(id) {
    return prisma.product.delete({ where: { id } });
  },
};
