import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";

import response from "../../utilities/response";
import { NextFunction, Request, Response } from "express";

import { eQualificationServices } from "./qualification.services";

const addEducationalQualification = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const qualificationData = req.body;
    const id = req.user.id;

    const result = await eQualificationServices.addEducationalQualification(
      id,
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

const getAllQualification = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.user.id;

    const result = await eQualificationServices.getAllQualifications(id);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Educational qualifications fetch!",
      data: result,
    });
  }
);

const updateEducationalQualification = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const updateData = req.body;
    const id = req.params.e_id;

    const result = await eQualificationServices.updateEducationalQualification(
      id,
      updateData
    );

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Educational qualification updated!",
      data: result,
    });
  }
);

const deleteEducationalQualification = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.e_id;

    const result = await eQualificationServices.deleteEducationalQualification(
      id
    );

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Educational qualification deleted!",
      data: result,
    });
  }
);

export const eQualificationControllers = {
  addEducationalQualification,
  getAllQualification,
  updateEducationalQualification,
  deleteEducationalQualification,
};
