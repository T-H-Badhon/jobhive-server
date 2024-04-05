import { Prisma, PrismaClient } from "@prisma/client";
import querybuilder from "../../utilities/queryBuilder";
import paginationandSorting from "../../utilities/pagination&sorting";

const prisma = new PrismaClient();

const allAdmins = async (query: any) => {
  const filterFields = ["name", "contactNo", "email", "nid"];
  const andWhere: Prisma.AdminWhereInput[] = querybuilder(query, filterFields);

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

export const adminServices = {
  allAdmins,
  oneAdmin,
};
