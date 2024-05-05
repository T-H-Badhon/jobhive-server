import { Router } from "express";
import { userControllers } from "./user.controllers";
import auth from "../../middlewares/auth";
import { UserRoles } from "@prisma/client";

const router = Router();

router.post(
  "/create-admin",
  auth(UserRoles.SUPERADMIN),
  userControllers.createAdmin
);

export const userRoutes = router;
