import { Router } from "express";
import { adminControllers } from "./admin.controllers";

const router = Router();

router.get("/", adminControllers.allAdmins);
router.get("/:id", adminControllers.oneAdmin);
router.get("/admin/:id", adminControllers.oneAdmin);

export const adminRoutes = router;
