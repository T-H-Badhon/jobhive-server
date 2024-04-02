import { Router } from "express";
import { DEFAULT_MAX_VERSION } from "tls";
import { userRoutes } from "../modules/user/user.routes";
import { adminRoutes } from "../modules/admins/admin.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/admins", adminRoutes);

export default router;
