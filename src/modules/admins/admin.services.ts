import { Admin, Prisma, PrismaClient, UserStatus } from "@prisma/client";
import querybuilder from "../../utilities/queryBuilder";
import paginationandSorting from "../../utilities/pagination&sorting";

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
  const result = await prisma.$transaction(async (tx) => {
    const deletedData = await tx.admin.delete({
      where: {
        id: id,
      },
    });

    const userDelete = tx.user.delete({
      where: {
        email: deletedData.email,
      },
    });

    return {
      deletedData,
    };
  });

  return result;
};

const deleteMe = async (email: string) => {
  const result = await prisma.$transaction(async (tx) => {
    const deleteAdmin = await tx.admin.update({
      where: {
        email: email,
      },
      data: {
        isDeleted: true,
      },
    });

    const deleteUser = await tx.user.update({
      where: {
        email: email,
      },
      data: {
        status: UserStatus.DELETED,
      },
    });

    return {
      message: "softly deleted",
    };
  });

  return result;
};

export const adminServices = {
  allAdmins,
  oneAdmin,
  updateAdmin,
  deleteAdmin,
  deleteMe,
};
