import { Request, Response } from "express";
import { userServices } from "./user.services";
import response from "../../utilities/response";
import httpStatus from "http-status";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await userServices.createAdmin(payload);

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

export const userControllers = {
  createAdmin,
};
