import dotenv from "dotenv";

dotenv.config({ quiet: true });

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.PORT ?? 8080),

  corsOrigin: process.env.CORS_ORIGIN ?? "*",

  dbHost: required("DB_HOST", "localhost"),
  dbPort: Number(process.env.DB_PORT ?? 3306),
  dbUser: required("DB_USER", "app"),
  dbPassword: required("DB_PASSWORD", "app"),
  dbName: required("DB_NAME", "app"),

  jwtSecret: required("JWT_SECRET", "dev_secret_change_me"),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "1h",
};
