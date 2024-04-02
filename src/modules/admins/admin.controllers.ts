import { Request, Response } from "express";
import catchAsync from "../../utilities/catchAsync";
import response from "../../utilities/response";
import { adminServices } from "./admin.services";

const allAdmins = async (req: Request, res: Response) => {
  try {
    const query = req.query;

    const result = await adminServices.allAdmins(query);

    response(res, {
      statusCode: 200,
      success: true,
      message: " All admins fetch successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const adminControllers = {
  allAdmins,
};
