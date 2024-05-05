import { z } from "zod";

export const zodAdminUpdateSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    contactNo: z.string().optional(),
    profilePhoto: z.string().optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),
    guardian: z.string().optional(),
    guardianAddress: z.string().optional(),
  }),
});
