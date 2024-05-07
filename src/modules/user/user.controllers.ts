import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";
import response from "../../utilities/response";
import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const photoDirectory = req.file?.path || "";

    const result = await userServices.createAdmin(payload, photoDirectory);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "admin created",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const createModaretor = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const photoDirectory = req.file?.path || "";

    const result = await userServices.createModaretor(payload, photoDirectory);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "modaretor created",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const createInterviewer = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const photoDirectory = req.file?.path || "";

    const result = await userServices.createInterviewer(
      payload,
      photoDirectory
    );

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Interviewer created",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const createSelector = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const photoDirectory = req.file?.path || "";

    const result = await userServices.createSelector(payload, photoDirectory);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Selector created",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const createApplicant = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const photoDirectory = req.file?.path || "";

    const result = await userServices.createApplicant(payload, photoDirectory);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Your account created Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const createCompany = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const photoDirectory = req.file?.path || "";

    const result = await userServices.createCompany(payload, photoDirectory);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Your account created Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const allUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;

    const result = await userServices.allUsers(query);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " All users fetch successfully!",
      meta: result.meta,
      data: result.data,
    });
  }
);

const changeStatus = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newStatus = req.body;

    const id = req.params.id;

    const result = await userServices.changeStatus(id, newStatus);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "user status changed",
      data: result,
    });
  }
);

const getMe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.user.id;
    const role = req.user.role;

    const result = await userServices.getMe(id, role);

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Your data fetch successfully",
      data: result,
    });
  }
);

const updateMe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.user.email;
    const role = req.user.role;

    const photoDirectory = req.file?.path as string;

    const updateData = req.body;

    const result = await userServices.updateMe(
      email,
      role,
      updateData,
      photoDirectory
    );

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Your data updated successfully",
      data: result,
    });
  }
);

export const userControllers = {
  createAdmin,
  createModaretor,
  createInterviewer,
  createSelector,
  createApplicant,
  createCompany,
  allUser,
  changeStatus,
  getMe,
  updateMe,
};
