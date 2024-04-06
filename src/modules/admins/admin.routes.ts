import { Router } from "express";
import { adminControllers } from "./admin.controllers";

const router = Router();

router.get("/", adminControllers.allAdmins);
router.get("/:id", adminControllers.oneAdmin);
router.patch("/:id", adminControllers.updateAdmin);
router.delete("/:id", adminControllers.deleteAdmin);

export const adminRoutes = router;
