import { env } from "../config/env.js";
import { AppError } from "../utils/AppError.js";

export function authMiddleware(req, res, next) {
  if (!env.API_TOKEN) return next();

  const auth = req.headers.authorization || "";
  const [type, token] = auth.split(" ");

  if (type !== "Bearer" || token !== env.API_TOKEN) {
    return next(new AppError("Unauthorized", 401));
  }

  return next();
}
