import { Router } from "express";

import { UserRoles } from "@prisma/client";
import auth from "../../middlewares/auth";
import { applicantControllers } from "./applicant.controllers";

const router = Router();

router.post(
  "/add-e-qualification",
  auth(UserRoles.APPLICANT),
  applicantControllers.addEducationalQualification
);

export const applicantRoutes = router;
