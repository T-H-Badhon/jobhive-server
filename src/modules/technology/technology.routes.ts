import { Router } from "express";
import { technologyControllers } from "./technology.controllers";
import auth from "../../middlewares/auth";
import { UserRoles } from "@prisma/client";

const router = Router();

router.post(
  "/add",

  technologyControllers.addTechnology
);

router.get("/", technologyControllers.getAllTechnologies);

router.delete(
  "/delete/:id",
  auth(UserRoles.ADMIN, UserRoles.MODERATOR),
  technologyControllers.deleteTechnology
);

export const technologyRoutes = router;
