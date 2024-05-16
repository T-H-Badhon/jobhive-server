import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utilities/catchAsync";
import response from "../../utilities/response";
import httpStatus from "http-status";
import { projectServices } from "./project.services";

const addProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const email = req.user.email;

    const result = await projectServices.addProject(email, payload);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project added!",
      data: result,
    });
  }
);

export const projectControllers = {
  addProject,
};
