import { Prisma, PrismaClient } from "@prisma/client";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const prisma = new PrismaClient();

const addEducationalQualification = async (
  email: string,
  qualificationData: any
) => {
  const applicant = await prisma.applicant.findUniqueOrThrow({
    where: {
      email: email,
    },
  });

  const result = await prisma.$transaction(async (tx) => {
    const qualification = await tx.educationalQualification.create({
      data: qualificationData,
    });

    await tx.applicantEducation.create({
      data: {
        applicantId: applicant?.id as string,
        qualificationId: qualification.id,
      },
    });

    return qualification;
  });

  return { qualificationData: result };
};

export const applicantServices = {
  addEducationalQualification,
};
