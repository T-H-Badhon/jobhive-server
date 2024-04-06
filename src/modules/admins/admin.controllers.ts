import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utilities/catchAsync";
import response from "../../utilities/response";
import { adminServices } from "./admin.services";
import httpStatus from "http-status";

const allAdmins = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;

    const result = await adminServices.allAdmins(query);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " All admins fetch successfully!",
      meta: result.meta,
      data: result.data,
    });
  }
);

const oneAdmin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await adminServices.oneAdmin(id);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data fetched successfully!",
      data: result,
    });
  }
);

const updateAdmin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updateData = req.body;

    const result = await adminServices.updateAdmin(id, updateData);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin updated successfully!",
      data: result,
    });
  }
);

const deleteAdmin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await adminServices.deleteAdmin(id);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin deleted successfully!",
      data: result,
    });
  }
);

const deleteMe = catchAsync(async (req: Request, res: Response) => {
  const email = req.body; // here we have to change to req.user custom req property..

  const result = await adminServices.deleteMe(email);

  response(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your account deleted successfully!",
    data: result,
  });
});

export const adminControllers = {
  allAdmins,
  oneAdmin,
  updateAdmin,
  deleteAdmin,
  deleteMe,
};
