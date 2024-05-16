import { Router } from "express";
import { projectControllers } from "./project.controllers";

const router = Router();

router.post("/add", projectControllers.addProject);

export const projectRoutes = router;
