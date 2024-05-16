import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addTechnology = async (payload: any) => {
  const technology = await prisma.technology.create({
    data: payload,
  });

  return technology;
};

const getAllTechnologies = async (searchTerm: string) => {
  const technologies = await prisma.technology.findMany({
    where: {
      name: {
        startsWith: searchTerm,
      },
    },
  });

  return technologies;
};

const deleteTechnology = async (id: string) => {
  const deletedData = await prisma.technology.delete({
    where: {
      id: id,
    },
  });

  return deletedData;
};

export const technologyServices = {
  addTechnology,
  getAllTechnologies,
  deleteTechnology,
};
