import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addJob = async (payload: any) => {
  const job = await prisma.job.create({ data: payload });
  return job;
};

const getAll = async (query: any) => {
  const result = await prisma.job.findMany({});

  return result;
};

const updateJob = async (id: string, payload: any) => {
  const updateData = await prisma.job.update({
    where: { id: id },
    data: payload,
  });

  return updateData;
};

const deleteJob = async (id: string) => {
  const deletedData = await prisma.job.delete({ where: { id: id } });

  return deletedData;
};

export const jobServices = {
  addJob,
  getAll,
  updateJob,
  deleteJob,
};
