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
const getAllProjects = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.user.email;

    const result = await projectServices.getAllProjects(email);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Projects fetched!",
      data: result,
    });
  }
);
const updateProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const email = req.user.email;

    const result = await projectServices.updateProject(email, payload);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project updated!",
      data: result,
    });
  }
);
const deleteProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await projectServices.deleteProject(id);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project deleted!",
      data: result,
    });
  }
);

export const projectControllers = {
  addProject,
  getAllProjects,
  updateProject,
  deleteProject,
};
