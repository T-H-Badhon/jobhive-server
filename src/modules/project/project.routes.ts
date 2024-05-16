import { Router } from "express";
import { projectControllers } from "./project.controllers";
import auth from "../../middlewares/auth";
import { UserRoles } from "@prisma/client";

const router = Router();

router.post("/add", auth(UserRoles.APPLICANT), projectControllers.addProject);
router.get("/me", auth(UserRoles.APPLICANT), projectControllers.getAllProjects);
router.patch(
  "/update/:id",
  auth(UserRoles.APPLICANT),
  projectControllers.updateProject
);
router.delete("/delete/:id", projectControllers.deleteProject);

export const projectRoutes = router;
