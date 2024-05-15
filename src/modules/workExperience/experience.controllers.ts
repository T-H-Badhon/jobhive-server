import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";

import response from "../../utilities/response";
import { NextFunction, Request, Response } from "express";

import { wExperienceServices } from "./experience.services";

const addWorkExperience = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const experienceData = req.body;
    const id = req.user.id;

    const result = await wExperienceServices.addWorkExperience(
      id,
      experienceData
    );

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Work experience added!",
      data: result,
    });
  }
);

const getAllExperiences = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.user.id;

    console.log("all exp");
    const result = await wExperienceServices.getAllExperiences(id);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Work experiences fetched!",
      data: result,
    });
  }
);

const updateWorkExperience = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const updateData = req.body;
    const id = req.params.experienceId;

    const result = await wExperienceServices.updateWorkExperience(
      id,
      updateData
    );

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Experience updated!",
      data: result,
    });
  }
);

const deleteWorkExperience = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.experienceId;

    const result = await wExperienceServices.deleteWorkExperience(id);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Experience deleted!",
      data: result,
    });
  }
);

export const wExperienceControllers = {
  addWorkExperience,
  getAllExperiences,
  updateWorkExperience,
  deleteWorkExperience,
};
