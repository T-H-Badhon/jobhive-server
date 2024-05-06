import { Router } from "express";
import { userControllers } from "./user.controllers";
import auth from "../../middlewares/auth";
import { UserRoles } from "@prisma/client";
import multer from "multer";
import path from "path";
import { fileUpload } from "../../utilities/fileUploader";
import { formdataModifier } from "../../middlewares/formDataModifier";
import zodValidation from "../../middlewares/zodValidation";
import {
  zodAdminCreateSchema,
  zodApplicantCreateSchema,
  zodCompanyCreateSchema,
  zodInterviewerCreateSchema,
  zodModaretorCreateSchema,
  zodSelectorCreateSchema,
} from "./user.validationSchema";

const router = Router();

//employee creation routes.....
router.post(
  "/create-admin",
  fileUpload.upload.single("file"),
  formdataModifier(),
  zodValidation(zodAdminCreateSchema),
  userControllers.createAdmin
);
router.post(
  "/create-modaretor",
  fileUpload.upload.single("file"),
  formdataModifier(),
  zodValidation(zodModaretorCreateSchema),
  userControllers.createModaretor
);
router.post(
  "/create-interviewer",
  fileUpload.upload.single("file"),
  formdataModifier(),
  zodValidation(zodInterviewerCreateSchema),
  userControllers.createInterviewer
);
router.post(
  "/create-selector",
  fileUpload.upload.single("file"),
  formdataModifier(),
  zodValidation(zodSelectorCreateSchema),
  userControllers.createSelector
);

//applicant & company creation routes
router.post(
  "/create-applicant",
  fileUpload.upload.single("file"),
  formdataModifier(),
  zodValidation(zodApplicantCreateSchema),
  userControllers.createAdmin
);
router.post(
  "/create-company",
  fileUpload.upload.single("file"),
  formdataModifier(),
  zodValidation(zodCompanyCreateSchema),
  userControllers.createAdmin
);

export const userRoutes = router;
