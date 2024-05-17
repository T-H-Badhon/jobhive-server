import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRoles } from "@prisma/client";

const router = Router();

router.post("/add", auth(UserRoles.APPLICANT));
router.get("/me", auth(UserRoles.APPLICANT));
router.patch("/update", auth(UserRoles.APPLICANT));
router.delete("/delete", auth(UserRoles.APPLICANT));

export const skillRoutes = router;
