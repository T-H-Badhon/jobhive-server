import jwt, { JwtPayload } from "jsonwebtoken";
import { configs } from "../config/config";

const ac_token = (tokenInfo: { email: string; role: string; id: string }) => {
  const token = jwt.sign(tokenInfo, configs.ac_secret as string, {
    algorithm: "HS256",
    expiresIn: configs.ac_exp,
  });

  return token;
};

const verifyAC_Token = async (token: string) => {
  try {
    const decoded = jwt.verify(
      token,
      configs.ac_secret as string
    ) as JwtPayload;

    return decoded;
  } catch (err) {
    throw new Error("You are not authorized!!");
  }
};

const refresh_token = (tokenInfo: {
  email: string;
  role: string;
  id: string;
}) => {
  const token = jwt.sign(tokenInfo, configs.refresh_secret as string, {
    algorithm: "HS256",
    expiresIn: configs.refresh_exp,
  });

  return token;
};

const verifyR_Token = async (token: string) => {
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

const reset_token = (tokenInfo: {
  email: string;
  role: string;
  id: string;
}) => {
  const token = jwt.sign(tokenInfo, configs.reset_secret as string, {
    algorithm: "HS256",
    expiresIn: configs.reset_exp,
  });

  return token;
};

const verifyReset_Token = async (token: string) => {
  try {
    const decoded = jwt.verify(
      token,
      configs.reset_secret as string
    ) as JwtPayload;

    return decoded;
  } catch (err) {
    throw new Error("You are not authorized!!");
  }
};

export const jwtToken = {
  ac_token,
  verifyAC_Token,
  refresh_token,
  verifyR_Token,
  reset_token,
  verifyReset_Token,
};
