import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utilities/catchAsync";
import response from "../../utilities/response";
import { adminServices } from "./admin.services";
import httpStatus from "http-status";

const allAdmins = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.query;

    const result = await adminServices.allAdmins(query);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " All admins fetch successfully!",
      meta: result.meta,
      data: result.data,
    });
  } catch (err) {
    next(err);
  }
};

const oneAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  try {
    const result = await adminServices.oneAdmin(id);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data fetched successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const updateData = req.body;

  try {
    const result = await adminServices.updateAdmin(id, updateData);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin updated successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  try {
    const result = await adminServices.deleteAdmin(id);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin deleted successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteMe = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body; // here we have to change to req.user custom req property..

  try {
    const result = await adminServices.deleteMe(email);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Your account deleted successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const adminControllers = {
  allAdmins,
  oneAdmin,
  updateAdmin,
  deleteAdmin,
  deleteMe,
};
