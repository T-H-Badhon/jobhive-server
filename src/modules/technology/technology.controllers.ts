import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import response from "../../utilities/response";
import { technologyServices } from "./technology.services";

const addTechnology = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await technologyServices.addTechnology(payload);
  response(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "technology added successfully!",
    data: result,
  });
});

const getAllTechnologies = catchAsync(async (req, res, next) => {
  const searchTerm = req.query.searchTerm;

  const result = await technologyServices.getAllTechnologies(
    searchTerm as string
  );
  response(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "technologies fetched successfully!",
    data: result,
  });
});
const deleteTechnology = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const result = await technologyServices.deleteTechnology(id);
  response(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "technologies deleted successfully!",
    data: result,
  });
});

export const technologyControllers = {
  addTechnology,
  getAllTechnologies,
  deleteTechnology,
};
