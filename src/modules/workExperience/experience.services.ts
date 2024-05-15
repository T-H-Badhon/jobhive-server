import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addWorkExperience = async (id: string, experienceData: any) => {
  const applicant = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      applicant: true,
    },
  });

  experienceData.applicantId = applicant.applicant?.id;
  experienceData.startDate = new Date(experienceData.startDate);
  experienceData.endDate = new Date(experienceData.endDate);

  console.log(experienceData);

  const experience = await prisma.workExperience.create({
    data: experienceData,
  });

  return experience;
};

const getAllExperiences = async (id: string) => {
  const applicant = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      applicant: true,
    },
  });

  const experiences = await prisma.workExperience.findMany({
    where: {
      applicantId: applicant.applicant?.id,
    },
    orderBy: {
      startDate: "desc",
    },
  });

  return experiences;
};

const updateWorkExperience = async (id: string, updateData: any) => {
  const updatedData = await prisma.workExperience.update({
    where: {
      id: id,
    },
    data: updateData,
  });

  return updatedData;
};

const deleteWorkExperience = async (id: string) => {
  const deletedData = await prisma.workExperience.delete({
    where: {
      id: id,
    },
  });

  return deletedData;
};

export const wExperienceServices = {
  addWorkExperience,
  getAllExperiences,
  updateWorkExperience,
  deleteWorkExperience,
};
