import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRoles } from "@prisma/client";
import zodValidation from "../../middlewares/zodValidation";
import {
  zodEducationalQualificationSchema,
  zodUpdateEQualificationSchema,
} from "./qualification.validationSchema";
import { eQualificationControllers } from "./qualification.controllers";

const router = Router();

router.post(
  "/add",
  auth(UserRoles.APPLICANT),
  zodValidation(zodEducationalQualificationSchema),
  eQualificationControllers.addEducationalQualification
);

router.get(
  "/me",
  auth(UserRoles.APPLICANT),
  eQualificationControllers.getAllQualification
);

router.patch(
  "/update/:qualificationId",
  auth(UserRoles.APPLICANT),
  zodValidation(zodUpdateEQualificationSchema),
  eQualificationControllers.updateEducationalQualification
);

router.delete(
  "/delete/:qualificationId",
  auth(UserRoles.APPLICANT),
  eQualificationControllers.deleteEducationalQualification
);

export const qualificationRoutes = router;
