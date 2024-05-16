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
import { projectRoutes } from "../project/project.routes";

const router = Router();

router.use("/qualifications", qualificationRoutes);
router.use("/experiences", experienceRoutes);
router.use("/projects", projectRoutes);

router.get(
  "/",
  auth(
    UserRoles.ADMIN,
    UserRoles.INTERVIEWER,
    UserRoles.MODARETOR,
    UserRoles.SELECTOR
  ),
  applicantControllers.allApplicants
);

router.get("/me", auth(UserRoles.APPLICANT), applicantControllers.myProfile);

router.get(
  "/:id",
  auth(
    UserRoles.ADMIN,
    UserRoles.INTERVIEWER,
    UserRoles.MODARETOR,
    UserRoles.SELECTOR
  ),
  applicantControllers.oneApplicant
);

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
