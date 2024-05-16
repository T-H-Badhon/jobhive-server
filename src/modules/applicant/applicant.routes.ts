import { Router } from "express";

import { UserRoles } from "@prisma/client";
import auth from "../../middlewares/auth";

import { applicantControllers } from "./applicant.controllers";

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
    UserRoles.MODERATOR,
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
    UserRoles.MODERATOR,
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
