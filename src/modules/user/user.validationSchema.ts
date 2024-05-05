import { z } from "zod";

export const zodAdminCreateSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
    nid: z.string(),
    name: z.string(),
    contactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: z.string().optional(),
    guardianAddress: z.string(),
  }),
});
