import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addEducationalQualification = async (qualificationData: any) => {
  console.log(qualificationData);

  const eQualification = await prisma.educationalQualification.create({
    data: qualificationData,
  });

  return eQualification;
};

export const EQualificationServices = {
  addEducationalQualification,
};
