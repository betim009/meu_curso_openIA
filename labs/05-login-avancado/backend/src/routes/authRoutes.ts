import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { usersRepo } from "../repositories/usersRepo";

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const authRoutes = Router();

authRoutes.post("/register", async (req, res) => {
  const fullName = String(req.body?.fullName ?? "").trim();
  const email = String(req.body?.email ?? "").trim().toLowerCase();
  const password = String(req.body?.password ?? "");

  if (!fullName) return res.status(400).json({ error: "validation", message: "fullName is required" });
  if (!email || !isEmail(email)) return res.status(400).json({ error: "validation", message: "valid email is required" });
  if (!password || password.length < 6)
    return res.status(400).json({ error: "validation", message: "password must be at least 6 characters" });

  const existing = await usersRepo.findByEmail(email);
  if (existing) return res.status(409).json({ error: "conflict", message: "email already registered" });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await usersRepo.createUser({ fullName, email, passwordHash });

  return res.status(201).json({ user });
});

authRoutes.post("/login", async (req, res) => {
  const email = String(req.body?.email ?? "").trim().toLowerCase();
  const password = String(req.body?.password ?? "");

  if (!email || !isEmail(email)) return res.status(400).json({ error: "validation", message: "valid email is required" });
  if (!password) return res.status(400).json({ error: "validation", message: "password is required" });

  const userRow = await usersRepo.findByEmail(email);
  if (!userRow) return res.status(401).json({ error: "invalid_credentials", message: "invalid email or password" });

  const ok = await bcrypt.compare(password, userRow.password_hash);
  if (!ok) return res.status(401).json({ error: "invalid_credentials", message: "invalid email or password" });

  const token = jwt.sign({ userId: userRow.id }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn,
  } as jwt.SignOptions);
  const user = await usersRepo.findById(userRow.id);
  if (!user) return res.status(500).json({ error: "server_error" });

  return res.json({ token, user });
});
