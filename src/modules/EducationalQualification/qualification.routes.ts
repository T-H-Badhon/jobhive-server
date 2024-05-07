import { Router } from "express";

import { UserRoles } from "@prisma/client";
import auth from "../../middlewares/auth";
import { EQualificationControllers } from "./qualification.controllers";

const router = Router();

router.post("/add", EQualificationControllers.addEducationalQualification);

export const EQualificationRoutes = router;
