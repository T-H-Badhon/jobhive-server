import { Router } from "express";

import { UserRoles } from "@prisma/client";
import auth from "../../middlewares/auth";
import zodValidation from "../../middlewares/zodValidation";

import { eQualificationControllers } from "../EducationalQualification/qualification.controllers";
import {
  zodEducationalQualificationSchema,
  zodUpdateEQualificationSchema,
} from "../EducationalQualification/qualification.validationSchema";
import { applicantControllers } from "./applicant.controllers";

const router = Router();

router.get("/", applicantControllers.allApplicants);
router.get("/:id", applicantControllers.oneApplicant);
router.patch(
  "/me",
  auth(UserRoles.APPLICANT),
  applicantControllers.updateApplicant
);
router.delete(
  "/me",
  auth(UserRoles.APPLICANT),
  applicantControllers.deleteApplicant
);

//educational qualifications-----------------
router.post(
  "/add-e-qualification",
  auth(UserRoles.APPLICANT),
  zodValidation(zodEducationalQualificationSchema),
  eQualificationControllers.addEducationalQualification
);

router.get(
  "/my-e-qualifications",
  auth(UserRoles.APPLICANT),
  eQualificationControllers.getAllQualification
);

router.patch(
  "/update-e-qualification/:e_id",
  auth(UserRoles.APPLICANT),
  zodValidation(zodUpdateEQualificationSchema),
  eQualificationControllers.updateEducationalQualification
);

router.delete(
  "/delete-e-qualification/:e_id",
  auth(UserRoles.APPLICANT),
  eQualificationControllers.deleteEducationalQualification
);

export const applicantRoutes = router;
