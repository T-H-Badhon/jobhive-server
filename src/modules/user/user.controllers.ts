import { Request, Response } from "express";
import { userServices } from "./user.services";
import response from "../../utilities/response";
import httpStatus from "http-status";

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

export const userControllers = {
  createAdmin,
  createModaretor,
  createInterviewer,
  createSelector,
  createApplicant,
  createCompany,
};
