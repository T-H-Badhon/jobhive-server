import jwt, { JwtPayload } from "jsonwebtoken";
import { configs } from "../config/config";

const ac_token = (tokenInfo: { email: string; role: string }) => {
  const token = jwt.sign(tokenInfo, configs.ac_secret as string, {
    algorithm: "HS256",
    expiresIn: configs.ac_exp,
  });

  return token;
};

const refresh_token = (tokenInfo: { email: string; role: string }) => {
  const token = jwt.sign(tokenInfo, configs.refresh_secret as string, {
    algorithm: "HS256",
    expiresIn: configs.refresh_exp,
  });

  return token;
};

const verifyToken = async (token: string) => {
  try {
    const decoded = jwt.verify(
      token,
      configs.refresh_secret as string
    ) as JwtPayload;

    return decoded;
  } catch (err) {
    throw new Error("You are not authorized!!");
  }
};

export const jwtToken = {
  ac_token,
  refresh_token,
  verifyToken,
};
