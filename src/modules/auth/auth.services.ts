import { PrismaClient, UserStatus } from "@prisma/client";
import { TLogin } from "./auth.interfaces";
import bcrypt from "bcrypt";
import { jwtToken } from "../../utilities/tokenGenerator";
import { htmlGenerator } from "../../utilities/htmlGenerator";
import { mailSender } from "../../utilities/mailSender";

const prisma = new PrismaClient();

const login = async (payload: TLogin) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });

  const isMatched = await bcrypt.compare(payload.password, userData.password);

  console.log(isMatched);

  if (!isMatched) {
    throw new Error("password not match");
  }

  const tokenInfo = {
    id: userData.id,
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
    id: userData.id,
    email: userData.email,
    role: userData.role,
  };

  const ac_token = jwtToken.ac_token(tokenInfo);

  return ac_token;
};

const changePassword = async (
  id: string,
  payload: { oldPassword: string; newPassword: string }
) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
  });

  const isMatched = await bcrypt.compare(
    payload.oldPassword,
    userData?.password
  );

  if (!isMatched) {
    throw new Error("password not match");
  }

  const hashPassword = bcrypt.hashSync(payload.newPassword, 12);

  const updatedUserData = await prisma.user.update({
    where: {
      id: userData.id,
    },
    data: {
      password: hashPassword,
      needPasswordChange: false,
    },
  });

  console.log(updatedUserData);

  return {
    message: "Password changed successfully",
  };
};

const forgetPassword = async (email: string) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: email,
      status: UserStatus.ACTIVE,
    },
  });

  const tokenInfo = {
    id: userData.id,
    email: userData.email,
    role: userData.role,
  };

  const resetToken = jwtToken.reset_token(tokenInfo);

  const resetHtml = htmlGenerator.resetHTML(resetToken);

  const sendMail = await mailSender.resetMail(
    resetHtml,
    "thbadhons@gmail.com",
    "reset link"
  );
};

const resetPassword = async (
  token: string,
  payload: { newPassword: string }
) => {
  const decodedData = await jwtToken.verifyReset_Token(token);

  console.log(decodedData);
  console.log(payload.newPassword);

  const hashPassword = bcrypt.hashSync(payload.newPassword, 12);

  const updateData = await prisma.user.update({
    where: {
      id: decodedData.id,
    },
    data: {
      password: hashPassword,
    },
  });

  console.log(updateData);
};

export const authServices = {
  login,
  loginByR_token,
  changePassword,
  forgetPassword,
  resetPassword,
};
