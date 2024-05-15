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
const myProfile = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.user.email;

    const result = await adminServices.myProfile(email);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Profile data fetched successfully!",
      data: result,
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
    const email = req.user.email;
    const updateData = req.body;

    const result = await adminServices.updateAdmin(email, updateData);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Profile updated successfully!",
      data: result,
    });
  }
);

const deleteAdmin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.user.email;
    const result = await adminServices.deleteAdmin(email);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Account deleted successfully!",
    });
  }
);

export const adminControllers = {
  allAdmins,
  oneAdmin,
  myProfile,
  updateAdmin,
  deleteAdmin,
};
