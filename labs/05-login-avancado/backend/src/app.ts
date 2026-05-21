import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { authRoutes } from "./routes/authRoutes";
import { meRoutes } from "./routes/meRoutes";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: env.corsOrigin === "*" ? true : env.corsOrigin,
      credentials: false,
    })
  );
  app.use(express.json());

  app.get("/api/health", (_req, res) => res.json({ ok: true }));
  app.use("/api/auth", authRoutes);
  app.use("/api", meRoutes);

  // Fallback 404
  app.use((_req, res) => res.status(404).json({ error: "not_found" }));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    // Minimal error handler to avoid leaking details in prod
    if (env.nodeEnv !== "production") {
      // eslint-disable-next-line no-console
      console.error(err);
    }
    return res.status(500).json({ error: "server_error" });
  });

  return app;
}

