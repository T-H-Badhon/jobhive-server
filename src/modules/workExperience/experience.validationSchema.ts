import { z } from "zod";

export const zodWorkExperienceSchema = z.object({
  body: z.object({
    position: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    responsibilities: z.string(),
  }),
});

export const zodUpdateWExperienceSchema = z.object({
  body: z.object({
    position: z.string().optional(),
    company: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    responsibilities: z.string().optional(),
  }),
});
