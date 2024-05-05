import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import { jwtToken } from "../utilities/tokenGenerator";
import { configs } from "../config/config";
import { JwtPayload, Secret } from "jsonwebtoken";

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        console.log("token nei");
        throw new AppError(httpStatus.UNAUTHORIZED, "You are not Authorized!");
      }
      console.log(token);
      const decodedData = await jwtToken.verifyAC_Token(token);

      console.log(decodedData);

      if (!roles.includes(decodedData.role)) {
        console.log("role not matched");
        throw new AppError(httpStatus.UNAUTHORIZED, "You are not Authorized!");
      }
      console.log("ok");

      req.user = decodedData;

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
