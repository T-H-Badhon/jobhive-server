import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";

import { EQualificationServices } from "./qualification.services";
import response from "../../utilities/response";
import { NextFunction, Request, Response } from "express";

const addEducationalQualification = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const qualificationData = req.body;

    const result = await EQualificationServices.addEducationalQualification(
      qualificationData
    );

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Educational qualification added!",
      data: result,
    });
  }
);

export const EQualificationControllers = {
  addEducationalQualification,
};
