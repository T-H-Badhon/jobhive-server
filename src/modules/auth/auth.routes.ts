import { Router } from "express";
import zodValidation from "../../middlewares/zodValidation";
import {
  zodChangePasswordSchema,
  zodForgetPasswordSchema,
  zodLoginSchema,
  zodResetPasswordSchema,
} from "./auth.validations";
import { authControllers } from "./auth.controllers";
import { UserRoles } from "@prisma/client";
import auth from "../../middlewares/auth";

const router = Router();

router.post("/login", zodValidation(zodLoginSchema), authControllers.login);
router.post("/refresh-token", authControllers.loginByR_token);
router.post(
  "/change-password",
  auth(
    UserRoles.ADMIN,
    UserRoles.APPLICANT,
    UserRoles.COMPANY,
    UserRoles.INTERVIEWER,
    UserRoles.MODERATOR,
    UserRoles.SELECTOR,
    UserRoles.SUPERADMIN
  ),
  zodValidation(zodChangePasswordSchema),
  authControllers.changePassword
);

router.post(
  "/forget-password",
  zodValidation(zodForgetPasswordSchema),
  authControllers.forgetPassword
);

router.post(
  "/reset-password",
  zodValidation(zodResetPasswordSchema),
  authControllers.resetPassword
);

export const authRoutes = router;
