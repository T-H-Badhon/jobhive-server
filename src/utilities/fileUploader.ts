import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dw30sre1k",
  api_key: "486174566165413",
  api_secret: "UXc0rQpAmL_bgGI16wNC5qoDnZs",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const upload_to_cloudinary = async (path: string, name: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(path, { public_id: name }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result?.secure_url);
      }
    });
  });
};

export const fileUpload = {
  upload,
  upload_to_cloudinary,
};
