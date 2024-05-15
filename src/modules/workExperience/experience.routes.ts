import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRoles } from "@prisma/client";
import zodValidation from "../../middlewares/zodValidation";
import { zodWorkExperienceSchema } from "./experience.validationSchema";
import { wExperienceControllers } from "./experience.controllers";

const router = Router();

router.post(
  "/add",
  auth(UserRoles.APPLICANT),
  zodValidation(zodWorkExperienceSchema),
  wExperienceControllers.addWorkExperience
);

router.get(
  "/me",
  auth(UserRoles.APPLICANT),
  wExperienceControllers.getAllExperiences
);

router.patch(
  "/update/:experienceId",
  auth(UserRoles.APPLICANT),
  wExperienceControllers.updateWorkExperience
);
router.delete(
  "/delete/:experienceId",
  auth(UserRoles.APPLICANT),
  wExperienceControllers.deleteWorkExperience
);

export const experienceRoutes = router;
