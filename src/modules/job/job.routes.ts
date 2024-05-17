import { Router } from "express";
import { jobControllers } from "./job.controllers";

const router = Router();

router.post("/add", jobControllers.addJob);
router.get("/", jobControllers.getAll);
router.patch("/update", jobControllers.updateJob);
router.delete("/delete", jobControllers.deleteJob);

export const jobRoutes = router;
