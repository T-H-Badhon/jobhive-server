import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";

import response from "../../utilities/response";
import { NextFunction, Request, Response } from "express";
import { applicantServices } from "./applicant.services";

const addEducationalQualification = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const qualificationData = req.body;
    const email = req.user.email;

    const result = await applicantServices.addEducationalQualification(
      email,
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

export const applicantControllers = {
  addEducationalQualification,
};
