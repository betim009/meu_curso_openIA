import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export type AuthenticatedRequest = Request & { userId?: number };

export function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const header = req.header("authorization") ?? "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token) return res.status(401).json({ error: "unauthorized" });

  try {
    const payload = jwt.verify(token, env.jwtSecret) as { userId?: number };
    if (!payload.userId) return res.status(401).json({ error: "unauthorized" });
    req.userId = payload.userId;
    next();
  } catch {
    return res.status(401).json({ error: "unauthorized" });
  }
}

