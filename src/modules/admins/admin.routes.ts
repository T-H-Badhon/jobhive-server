import { Router } from "express";
import { adminControllers } from "./admin.controllers";

const router = Router();

router.get("/", adminControllers.allAdmins);

export const adminRoutes = router;
