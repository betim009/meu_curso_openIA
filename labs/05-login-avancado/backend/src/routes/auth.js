import { Router } from 'express';
import { createUser, findUserByEmail } from '../db.js';
import { loginUser, registerUser } from '../authService.js';

export function authRouter(repository = { createUser, findUserByEmail }) {
  const router = Router();

  router.post('/register', async (req, res, next) => {
    try {
      const result = await registerUser(req.body, repository);
      res.status(result.status).json(result.body);
    } catch (error) {
      next(error);
    }
  });

  router.post('/login', async (req, res, next) => {
    try {
      const result = await loginUser(req.body, repository);
      res.status(result.status).json(result.body);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
