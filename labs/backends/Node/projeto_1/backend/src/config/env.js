import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  PORT: z.coerce.number().int().positive().default(3001),
  API_TOKEN: z.string().min(1).optional(),
});

export const env = envSchema.parse(process.env);
