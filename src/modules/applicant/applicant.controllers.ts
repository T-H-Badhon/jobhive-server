import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";

import response from "../../utilities/response";
import { NextFunction, Request, Response } from "express";
import { applicantServices } from "./applicant.services";

const allApplicants = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;

    const result = await applicantServices.allApplicants(query);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " All applicants fetch successfully!",
      meta: result.meta,
      data: result.data,
    });
  }
);

const oneApplicant = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await applicantServices.oneApplicant(id);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Applicant data fetched successfully!",
      data: result,
    });
  }
);

const updateApplicant = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.user.email;
    const updateData = req.body;

    const result = await applicantServices.updateApplicant(email, updateData);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Applicant updated successfully!",
      data: result,
    });
  }
);

const deleteApplicant = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.user.email;
    const result = await applicantServices.deleteApplicant(email);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "account deleted successfully!",
    });
  }
);

export const applicantControllers = {
  allApplicants,
  oneApplicant,
  updateApplicant,
  deleteApplicant,
};
