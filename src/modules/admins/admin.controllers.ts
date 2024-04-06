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
      meta: result.meta,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

const oneAdmin = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await adminServices.oneAdmin(id);

    response(res, {
      statusCode: 200,
      success: true,
      message: "Admin data fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateAdmin = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;

  try {
    const result = await adminServices.updateAdmin(id, updateData);

    response(res, {
      statusCode: 200,
      success: true,
      message: "Admin updated successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteAdmin = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await adminServices.deleteAdmin(id);

    response(res, {
      statusCode: 200,
      success: true,
      message: "Admin deleted successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const adminControllers = {
  allAdmins,
  oneAdmin,
  updateAdmin,
  deleteAdmin,
};
