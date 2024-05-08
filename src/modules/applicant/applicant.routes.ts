import { Router } from "express";

import { UserRoles } from "@prisma/client";
import auth from "../../middlewares/auth";
import { applicantControllers } from "./applicant.controllers";
import zodValidation from "../../middlewares/zodValidation";
import {
  zodEducationalQualificationSchema,
  zodUpdateEQualificationSchema,
} from "./applicant.validationSchema";

const router = Router();

router.post(
  "/add-e-qualification",
  auth(UserRoles.APPLICANT),
  zodValidation(zodEducationalQualificationSchema),
  applicantControllers.addEducationalQualification
);

router.get(
  "/my-e-qualifications",
  auth(UserRoles.APPLICANT),
  applicantControllers.getAllQualification
);

router.patch(
  "/update-e-qualification/:e_id",
  auth(UserRoles.APPLICANT),
  zodValidation(zodUpdateEQualificationSchema),
  applicantControllers.updateEducationalQualification
);

router.delete(
  "/delete-e-qualification/:e_id",
  auth(UserRoles.APPLICANT),
  applicantControllers.deleteEducationalQualification
);

export const applicantRoutes = router;
