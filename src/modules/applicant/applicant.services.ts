import { Prisma, PrismaClient } from "@prisma/client";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const prisma = new PrismaClient();

const addEducationalQualification = async (
  id: string,
  qualificationData: any
) => {
  const applicant = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      applicant: true,
    },
  });

  qualificationData.applicantId = applicant.applicant?.id;

  console.log(qualificationData);

  const qualification = await prisma.educationalQualification.create({
    data: qualificationData,
  });

  return qualification;
};

export const applicantServices = {
  addEducationalQualification,
};
