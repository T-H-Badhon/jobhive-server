import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";

import response from "../../utilities/response";
import { NextFunction, Request, Response } from "express";
import { jobServices } from "./job.services";

const addJob = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const jobData = req.body;

    const result = await jobServices.addJob(jobData);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Job posted!",
      data: result,
    });
  }
);

const getAll = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;

    const result = await jobServices.getAll(query);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "job fetch!",
      data: result,
    });
  }
);

const updateJob = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const updateData = req.body;
    const id = req.params.qualificationId;

    const result = await jobServices.updateJob(id, updateData);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "job updated!",
      data: result,
    });
  }
);

const deleteJob = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.jobId;

    const result = await jobServices.deleteJob(id);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Educational qualification deleted!",
      data: result,
    });
  }
);

export const jobControllers = {
  addJob,
  getAll,
  updateJob,
  deleteJob,
};
