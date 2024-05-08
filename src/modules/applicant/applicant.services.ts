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

const getAllQualifications = async (id: string) => {
  const applicant = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      applicant: true,
    },
  });

  const qualifications = await prisma.educationalQualification.findMany({
    where: {
      applicantId: applicant.applicant?.id,
    },
    orderBy: {
      passingYear: "desc",
    },
  });

  return qualifications;
};

const updateEducationalQualification = async (id: string, updateData: any) => {
  const updatedData = await prisma.educationalQualification.update({
    where: {
      id: id,
    },
    data: updateData,
  });

  return updatedData;
};

const deleteEducationalQualification = async (id: string) => {
  const deletedData = await prisma.educationalQualification.delete({
    where: {
      id: id,
    },
  });

  return deletedData;
};

export const applicantServices = {
  addEducationalQualification,
  getAllQualifications,
  updateEducationalQualification,
  deleteEducationalQualification,
};
