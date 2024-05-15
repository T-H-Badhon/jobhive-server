import { Applicant, Prisma, PrismaClient } from "@prisma/client";
import querybuilder from "../../utilities/queryBuilder";
import paginationandSorting from "../../utilities/pagination&sorting";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const prisma = new PrismaClient();

const allApplicants = async (query: any) => {
  const filterFields = [
    "name",
    "contactNo",
    "email",
    "nid",
    "married",
    "employmentStatus",
  ];
  const searchFields = ["name", "email", "contactNo", "address"];
  const andWhere: Prisma.ApplicantWhereInput[] = querybuilder(
    query,
    filterFields,
    searchFields
  );

  const { page, limit, sortBy, sortOrder } = paginationandSorting(query);

  const result = await prisma.applicant.findMany({
    where: { AND: andWhere },
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      [sortBy as string]: sortOrder,
    },
    include: {
      educationalQualification: {
        orderBy: {
          passingYear: "desc",
        },
      },
    },
  });

  const total = await prisma.applicant.count({
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

const oneApplicant = async (id: string) => {
  const result = await prisma.applicant.findUnique({
    where: {
      id: id,
    },
    include: {
      WorkExperience: {
        orderBy: {
          startDate: "desc",
        },
      },
      educationalQualification: {
        orderBy: {
          passingYear: "desc",
        },
      },
    },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Applicant not found!");
  }

  return result;
};
const myProfile = async (email: string) => {
  const result = await prisma.applicant.findUnique({
    where: {
      email: email,
    },
    include: {
      WorkExperience: {
        orderBy: {
          startDate: "desc",
        },
      },
      educationalQualification: {
        orderBy: {
          passingYear: "desc",
        },
      },
    },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Profile data not found");
  }

  return result;
};

const updateApplicant = async (
  email: string,
  updateData: Partial<Applicant>
) => {
  const result = await prisma.applicant.update({
    where: {
      email: email,
    },
    data: updateData,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_IMPLEMENTED, "Profile update failed");
  }
  return result;
};

const deleteApplicant = async (email: string) => {
  console.log(email);
  const deletedData = await prisma.applicant.update({
    where: {
      email: email,
    },
    data: {
      isDeleted: true,
    },
  });

  if (deletedData.isDeleted != true) {
    throw new AppError(httpStatus.FAILED_DEPENDENCY, "Account deletion failed");
  }
};

export const applicantServices = {
  allApplicants,
  oneApplicant,
  myProfile,
  updateApplicant,
  deleteApplicant,
};
