import { Admin, Prisma, PrismaClient, UserStatus } from "@prisma/client";
import querybuilder from "../../utilities/queryBuilder";
import paginationandSorting from "../../utilities/pagination&sorting";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const prisma = new PrismaClient();

const allAdmins = async (query: any) => {
  const filterFields = ["name", "contactNo", "email", "nid"];
  const searchFields = ["name", "email"];
  const andWhere: Prisma.AdminWhereInput[] = querybuilder(
    query,
    filterFields,
    searchFields
  );

  const { page, limit, sortBy, sortOrder } = paginationandSorting(query);

  const result = await prisma.admin.findMany({
    where: { AND: andWhere },
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      [sortBy as string]: sortOrder,
    },
  });

  const total = await prisma.admin.count({
    where: { AND: andWhere },
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const oneAdmin = async (id: string) => {
  const result = await prisma.admin.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateAdmin = async (id: string, updateData: Partial<Admin>) => {
  const result = await prisma.admin.update({
    where: {
      id: id,
    },
    data: updateData,
  });
  return result;
};

const deleteAdmin = async (id: string) => {
  const deletedData = await prisma.admin.update({
    where: {
      id: id,
    },
    data: {
      isDeleted: true,
    },
  });

  if (deletedData.isDeleted != true) {
    throw new AppError(httpStatus.FAILED_DEPENDENCY, "account deletion failed");
  }
};

export const adminServices = {
  allAdmins,
  oneAdmin,
  updateAdmin,
  deleteAdmin,
};
