import { PrismaClient } from "@prisma/client";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const prisma = new PrismaClient();

const addProject = async (email: string, payload: any) => {
  const applicant = await prisma.applicant.findUnique({
    where: {
      email: email,
    },
  });

  if (!applicant) {
    throw new AppError(httpStatus.NOT_FOUND, "Applicant not found");
  }

  const { features, technologies, ...projectData } = payload;

  projectData.applicantId = applicant.id;

  const result = await prisma.$transaction(async (tx) => {
    const project = await tx.project.create({ data: projectData });
    if (!project) {
      throw new AppError(httpStatus.FAILED_DEPENDENCY, "project add failed");
    }

    if (technologies && technologies.length > 0) {
      const tech = technologies.map((technologyId: string) => {
        return { projectId: project.id, technologyId: technologyId };
      });
      const techData = await tx.projectTechnologies.createMany({
        data: tech,
      });
    }

    if (features && features.length > 0) {
      const featuresData = features?.map((feature: string) => {
        return {
          feature: feature,
          projectId: project.id,
        };
      });
      const fData = await tx.features.createMany({ data: featuresData });
    }

    return project;
  });

  const project = await prisma.project.findUnique({
    where: {
      id: result.id,
    },
    include: {
      projectTechnologies: {
        include: {
          technology: true,
        },
      },
      features: true,
    },
  });
  return project;
};

const getAllProjects = async (email: string) => {
  const applicant = await prisma.applicant.findUnique({
    where: { email: email },
  });

  const projects = await prisma.project.findMany({
    where: { applicantId: applicant?.id },
    include: {
      projectTechnologies: {
        include: {
          technology: true,
        },
      },
      features: true,
    },
  });

  return projects;
};

const updateProject = async (projectId: string, payload: any) => {
  const currentProject = await prisma.project.findUnique({
    where: { id: projectId },
    include: {
      projectTechnologies: {
        include: {
          technology: true,
        },
      },
      features: true,
    },
  });

  console.log(currentProject);
};

const deleteProject = async (projectId: string) => {
  const deletedData = await prisma.project.delete({
    where: { id: projectId },
  });
  return deletedData;
};

export const projectServices = {
  addProject,
  getAllProjects,
  updateProject,
  deleteProject,
};
