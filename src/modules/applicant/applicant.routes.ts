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
import { zodWorkExperienceSchema } from "../workExperience/experience.validationSchema";
import { wExperienceControllers } from "../workExperience/experience.controllers";
import { qualificationRoutes } from "../EducationalQualification/qualification.router";
import { experienceRoutes } from "../workExperience/experience.routes";

const router = Router();

router.use("/qualifications", qualificationRoutes);
router.use("/experiences", experienceRoutes);

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

export const applicantRoutes = router;
