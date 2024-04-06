import { NextFunction, Response, Request } from "express";
import response from "../utilities/response";
import httpStatus from "http-status";

export const globalErrorhandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    statusCode: 500,
    success: false,
    errorMessage: "something went wrong",
    error: err,
  });
};
