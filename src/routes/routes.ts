import { Router } from "express";
import { DEFAULT_MAX_VERSION } from "tls";
import { userRoutes } from "../modules/user/user.routes";
import { adminRoutes } from "../modules/admins/admin.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { applicantRoutes } from "../modules/applicant/applicant.routes";
import { technologyRoutes } from "../modules/technology/technology.routes";
import { skillRoutes } from "../modules/skill/skill.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/admins", adminRoutes);
router.use("/auth", authRoutes);
router.use("/applicant", applicantRoutes);
router.use("/technologies", technologyRoutes);
router.use("/skills", skillRoutes);

export default router;
