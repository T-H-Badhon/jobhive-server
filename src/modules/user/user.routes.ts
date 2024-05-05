import { Router } from "express";
import { userControllers } from "./user.controllers";
import auth from "../../middlewares/auth";
import { UserRoles } from "@prisma/client";
import multer from "multer";
import path from "path";
import { fileUpload } from "../../utilities/fileUploader";
import { formdataModifier } from "../../middlewares/formDataModifier";
import zodValidation from "../../middlewares/zodValidation";
import { zodAdminCreateSchema } from "./user.validationSchema";

const router = Router();

// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: "dw30sre1k",
//   api_key: "486174566165413",
//   api_secret: "UXc0rQpAmL_bgGI16wNC5qoDnZs",
// });

// cloudinary.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) {
//     console.log(result);
//   }
// );

router.post(
  "/create-admin",
  fileUpload.upload.single("file"),
  formdataModifier(),
  zodValidation(zodAdminCreateSchema),
  userControllers.createAdmin
);

export const userRoutes = router;
