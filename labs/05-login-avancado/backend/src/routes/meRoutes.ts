import { Router } from "express";
import { requireAuth, type AuthenticatedRequest } from "../middleware/auth";
import { usersRepo } from "../repositories/usersRepo";

export const meRoutes = Router();

meRoutes.get("/me", requireAuth, async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const user = await usersRepo.findById(userId);
  if (!user) return res.status(404).json({ error: "not_found" });
  return res.json({ user });
});

