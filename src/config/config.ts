import dotenv from "dotenv";
import path, { join } from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const configs = {
  port: process.env.PORT,
  ac_secret: process.env.AC_SECRET,
  ac_exp: process.env.AC_EXP,
  refresh_secret: process.env.REFRESH_SECRET,
  refresh_exp: process.env.REFRESH_EXP,
  reset_secret: process.env.RESET_SECRET,
  reset_exp: process.env.RESET_EXP,
  salt: process.env.SALT,
  senderEmail: process.env.EMAIL,
  app_pass: process.env.APP_SECRET,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  superAdminPassword: process.env.SUPER_ADMIN_PASSWORD,
  superAdminEmail: process.env.SUPER_ADMIN_EMAIL,
};
