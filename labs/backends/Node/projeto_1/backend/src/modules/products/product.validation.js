import { z } from "zod";

export const productIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export const createProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1).optional(),
  priceCents: z.number().int().nonnegative(),
});

export const updateProductSchema = z
  .object({
    name: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    priceCents: z.number().int().nonnegative().optional(),
  })
  .refine((v) => Object.keys(v).length > 0, {
    message: "At least one field must be provided",
  });
