import { prisma } from "../../database/prisma.js";

export const userRepository = {
  create(data) {
    return prisma.user.create({ data });
  },

  list() {
    return prisma.user.findMany({ orderBy: { id: "asc" } });
  },

  getById(id) {
    return prisma.user.findUnique({ where: { id } });
  },

  findByEmail(email) {
    return prisma.user.findUnique({ where: { email } });
  },

  update(id, data) {
    return prisma.user.update({ where: { id }, data });
  },

  remove(id) {
    return prisma.user.delete({ where: { id } });
  },
};
