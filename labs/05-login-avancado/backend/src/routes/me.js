import { Router } from 'express';
import { findUserById } from '../db.js';
import { requireAuth } from '../middleware/auth.js';

export function meRouter(repository = { findUserById }) {
  const router = Router();

  router.get('/', requireAuth, async (req, res, next) => {
    try {
      const user = await repository.findUserById(req.auth.sub);

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      return res.json({ user });
    } catch (error) {
      return next(error);
    }
  });

  return router;
}
