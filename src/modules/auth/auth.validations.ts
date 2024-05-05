import { z } from "zod";

export const zodLoginSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
});

export const zodChangePasswordSchema = z.object({
  body: z.object({
    oldPassword: z.string(),
    newPassword: z.string(),
  }),
});

export const zodForgetPasswordSchema = z.object({
  body: z.object({
    email: z.string(),
  }),
});

export const zodResetPasswordSchema = z.object({
  body: z.object({
    newPassword: z.string(),
  }),
});
