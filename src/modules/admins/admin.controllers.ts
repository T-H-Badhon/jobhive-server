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
    const id = req.user.id;
    const result = await adminServices.deleteAdmin(id);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "account deleted successfully!",
    });
  }
);

export const adminControllers = {
  allAdmins,
  oneAdmin,
  updateAdmin,
  deleteAdmin,
};
