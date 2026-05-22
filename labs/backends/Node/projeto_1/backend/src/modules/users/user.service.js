import { AppError } from "../../utils/AppError.js";
import { userRepository } from "./user.repository.js";

export const userService = {
  async create(data) {
    const existing = await userRepository.findByEmail(data.email);
    if (existing) throw new AppError("Email already in use", 409);
    return userRepository.create(data);
  },

  async list() {
    return userRepository.list();
  },

  async getById(id) {
    const user = await userRepository.getById(id);
    if (!user) throw new AppError("User not found", 404);
    return user;
  },

  async update(id, data) {
    const user = await userRepository.getById(id);
    if (!user) throw new AppError("User not found", 404);

    if (data.email && data.email !== user.email) {
      const existing = await userRepository.findByEmail(data.email);
      if (existing) throw new AppError("Email already in use", 409);
    }

    return userRepository.update(id, data);
  },

  async remove(id) {
    const user = await userRepository.getById(id);
    if (!user) throw new AppError("User not found", 404);
    await userRepository.remove(id);
  },
};
