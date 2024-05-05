import { PrismaClient, UserStatus } from "@prisma/client";
import { TLogin } from "./auth.interfaces";
import bcrypt from "bcrypt";
import { jwtToken } from "../../utilities/tokenGenerator";

const prisma = new PrismaClient();

const login = async (payload: TLogin) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });

  const isMatched = bcrypt.compare(payload.password, userData.password);

  if (!isMatched) {
    throw new Error("password not match");
  }

  const tokenInfo = {
    email: userData.email,
    role: userData.role,
  };

  const token = jwtToken.ac_token(tokenInfo);

  const refreshToken = jwtToken.refresh_token(tokenInfo);

  return {
    token,
    refreshToken,
    needPasswordChange: userData.needPasswordChange,
  };
};

const loginByR_token = async (token: string) => {
  const decodedData = await jwtToken.verifyR_Token(token);

  const userData = await prisma.user.findUnique({
    where: {
      email: decodedData.email,
      status: UserStatus.ACTIVE,
    },
  });

  if (!userData) {
    throw new Error("User Not Found!");
  }

  const tokenInfo = {
    email: userData.email,
    role: userData.role,
  };

  const ac_token = jwtToken.ac_token(tokenInfo);

  return ac_token;
};

export const authServices = {
  login,
  loginByR_token,
};
