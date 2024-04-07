import { Router } from "express";
import zodValidation from "../../middlewares/zodValidation";
import { zodLoginSchema } from "./auth.validations";
import { authControllers } from "./auth.controllers";

const router = Router();

router.post("/login", zodValidation(zodLoginSchema), authControllers.login);
router.post("/refresh-token", authControllers.loginByR_token);

export const authRoutes = router;
