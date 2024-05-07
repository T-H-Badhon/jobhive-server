import { Router } from "express";
import { DEFAULT_MAX_VERSION } from "tls";
import { userRoutes } from "../modules/user/user.routes";
import { adminRoutes } from "../modules/admins/admin.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { EQualificationRoutes } from "../modules/EducationalQualification/qualification.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/admins", adminRoutes);
router.use("/auth", authRoutes);
router.use("/e-qualifications", EQualificationRoutes);

export default router;
