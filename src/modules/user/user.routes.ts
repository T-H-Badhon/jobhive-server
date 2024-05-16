import { Router } from "express";
import { userControllers } from "./user.controllers";
import auth from "../../middlewares/auth";
import { UserRoles } from "@prisma/client";
import { fileUpload } from "../../utilities/fileUploader";
import { formdataModifier } from "../../middlewares/formDataModifier";
import zodValidation from "../../middlewares/zodValidation";
import {
  zodAdminCreateSchema,
  zodApplicantCreateSchema,
  zodChangeStatusSchema,
  zodCompanyCreateSchema,
  zodInterviewerCreateSchema,
  zodModeratorCreateSchema,
  zodSelectorCreateSchema,
} from "./user.validationSchema";

const router = Router();

router.post(
  "/create-admin",
  fileUpload.upload.single("file"),
  formdataModifier(),
  zodValidation(zodAdminCreateSchema),
  userControllers.createAdmin
);
router.post(
  "/create-moderator",
  fileUpload.upload.single("file"),
  formdataModifier(),
  auth(UserRoles.ADMIN),
  zodValidation(zodModeratorCreateSchema),
  userControllers.createModerator
);
router.post(
  "/create-interviewer",
  fileUpload.upload.single("file"),
  formdataModifier(),
  auth(UserRoles.ADMIN, UserRoles.MODERATOR),
  zodValidation(zodInterviewerCreateSchema),
  userControllers.createInterviewer
);
router.post(
  "/create-selector",
  fileUpload.upload.single("file"),
  formdataModifier(),
  auth(UserRoles.ADMIN, UserRoles.MODERATOR),
  zodValidation(zodSelectorCreateSchema),
  userControllers.createSelector
);

//applicant & company creation routes
router.post(
  "/create-applicant",
  fileUpload.upload.single("file"),
  formdataModifier(),
  zodValidation(zodApplicantCreateSchema),
  userControllers.createApplicant
);
router.post(
  "/create-company",
  fileUpload.upload.single("file"),
  formdataModifier(),
  zodValidation(zodCompanyCreateSchema),
  userControllers.createCompany
);

router.get(
  "/",
  auth(UserRoles.ADMIN, UserRoles.MODERATOR),
  userControllers.allUser
);

router.patch(
  "/change-status/:id",
  auth(UserRoles.ADMIN, UserRoles.MODERATOR),
  zodValidation(zodChangeStatusSchema),
  userControllers.changeStatus
);

export const userRoutes = router;
