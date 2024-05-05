import { Request, Response } from "express";
import catchAsync from "../../utilities/catchAsync";
import { authServices } from "./auth.services";
import response from "../../utilities/response";
import httpStatus from "http-status";

const login = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await authServices.login(payload);

  res.cookie("refreshToken", result.refreshToken, {
    secure: false,
    httpOnly: true,
  });

  response(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " User loged in successfully!",
    data: {
      token: result.token,
      needPasswordChange: result.needPasswordChange,
    },
  });
});

const loginByR_token = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  console.log(refreshToken);

  const result = await authServices.loginByR_token(refreshToken);

  response(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " AC token generated successfully!!",
    data: {
      token: result,
    },
  });
});

const changePassword = catchAsync(async (req: Request, res: Response) => {
  const passwordCredential = req.body;
  const { id } = req.user;

  const result = await authServices.changePassword(id, passwordCredential);

  response(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});

const forgetPassword = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;

  console.log(req.body, email);

  const result = await authServices.forgetPassword(email);

  response(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reset link send to your email",
  });
});

const resetPassword = catchAsync(async (req: Request, res: Response) => {
  const passwordCredential = req.body;
  const token = req.headers.authorization || " ";
  console.log(token);

  const result = await authServices.resetPassword(token, passwordCredential);

  response(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password changed successfully!",
  });
});

export const authControllers = {
  login,
  loginByR_token,
  changePassword,
  forgetPassword,
  resetPassword,
};
