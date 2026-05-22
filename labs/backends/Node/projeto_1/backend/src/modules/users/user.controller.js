import { userService } from "./user.service.js";
import {
  createUserSchema,
  updateUserSchema,
  userIdSchema,
} from "./user.validation.js";

export const userController = {
  async create(req, res, next) {
    try {
      const data = createUserSchema.parse(req.body);
      const user = await userService.create(data);
      return res.status(201).json(user);
    } catch (err) {
      return next(err);
    }
  },

  async list(req, res, next) {
    try {
      const users = await userService.list();
      return res.json(users);
    } catch (err) {
      return next(err);
    }
  },

  async getById(req, res, next) {
    try {
      const { id } = userIdSchema.parse(req.params);
      const user = await userService.getById(id);
      return res.json(user);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = userIdSchema.parse(req.params);
      const data = updateUserSchema.parse(req.body);
      const user = await userService.update(id, data);
      return res.json(user);
    } catch (err) {
      return next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const { id } = userIdSchema.parse(req.params);
      await userService.remove(id);
      return res.status(204).send();
    } catch (err) {
      return next(err);
    }
  },
};
