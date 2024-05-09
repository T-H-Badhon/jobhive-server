import { Router } from "express";
import { adminControllers } from "./admin.controllers";
import zodValidation from "../../middlewares/zodValidation";
import { zodAdminUpdateSchema } from "./admin.validationSchema";
import { UserRoles } from "@prisma/client";
import auth from "../../middlewares/auth";

const router = Router();

router.get(
  "/",
  auth(UserRoles.ADMIN, UserRoles.SUPERADMIN),
  adminControllers.allAdmins
);
router.get("/me", auth(UserRoles.ADMIN)); // self profile
router.get(
  "/:id",
  auth(UserRoles.ADMIN, UserRoles.SUPERADMIN),
  adminControllers.oneAdmin
);

router.patch("/me", auth(UserRoles.ADMIN)); //self update
router.patch(
  "/:id",
  auth(UserRoles.SUPERADMIN),
  zodValidation(zodAdminUpdateSchema),
  adminControllers.updateAdmin
);

router.delete("/me", auth(UserRoles.ADMIN), adminControllers.deleteAdmin);

export const adminRoutes = router;
