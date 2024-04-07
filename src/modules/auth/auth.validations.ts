import { z } from "zod";

export const zodLoginSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
});
