import dotenv from "dotenv";
import path, { join } from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const configs = {
  port: process.env.PORT,
  ac_secret: process.env.AC_SECRET,
  ac_exp: process.env.AC_EXP,
  refresh_secret: process.env.REFRESH_SECRET,
  refresh_exp: process.env.REFRESH_EXP,
};
