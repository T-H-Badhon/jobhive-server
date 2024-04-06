import { NextFunction, Response, Request } from "express";
import httpStatus from "http-status";

export const notFound = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(httpStatus.NOT_FOUND).json({
    statusCode: 500,
    success: false,
    errorMessage: "something went wrong",
    error: err,
  });
};
