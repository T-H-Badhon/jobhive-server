import { UserStatus } from "@prisma/client";
import { z } from "zod";

export const zodEducationalQualificationSchema = z.object({
  body: z.object({
    degree: z.string(),
    institute: z.string(),
    passingYear: z.string(),
    cGPA: z.number(),
    scale: z.number(),
  }),
});

export const zodUpdateEQualificationSchema = z.object({
  body: z.object({
    degree: z.string().optional(),
    institute: z.string().optional(),
    passingYear: z.string().optional(),
    cGPA: z.number().optional(),
    scale: z.number().optional(),
  }),
});
