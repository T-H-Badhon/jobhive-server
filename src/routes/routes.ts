import { Router } from "express";
import { DEFAULT_MAX_VERSION } from "tls";
import { userRoutes } from "../modules/user/user.routes";
import { adminRoutes } from "../modules/admins/admin.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { EQualificationRoutes } from "../modules/EducationalQualification/qualification.routes";
import { applicantRoutes } from "../modules/applicant/applicant.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/admins", adminRoutes);
router.use("/auth", authRoutes);
router.use("/applicant", applicantRoutes);

export default router;
