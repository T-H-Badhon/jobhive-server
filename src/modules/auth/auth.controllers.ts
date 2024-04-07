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

export const authControllers = {
  login,
  loginByR_token,
};
