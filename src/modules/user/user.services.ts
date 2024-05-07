import {
  Admin,
  Applicant,
  Company,
  Interviewer,
  Modaretor,
  Prisma,
  PrismaClient,
  Selector,
  UserRoles,
  UserStatus,
} from "@prisma/client";
import bcrypt from "bcrypt";
import { fileUpload } from "../../utilities/fileUploader";
import querybuilder from "../../utilities/queryBuilder";
import paginationandSorting from "../../utilities/pagination&sorting";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { PrismaClientOptions } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

const createAdmin = async (payload: any, photoDirectory: string) => {
  const photolink = (await fileUpload.upload_to_cloudinary(
    photoDirectory
  )) as string;

  console.log(photolink);
  const hashPassword = bcrypt.hashSync(payload.password, 12);

  const userData = {
    password: hashPassword,
    email: payload.email,
    role: UserRoles.ADMIN,
  };

  const adminData = {
    name: payload.name,
    email: payload.email,
    contactNo: payload.contactNo,
    presentAddress: payload.presentAddress,
    permanentAddress: payload.permanentAddress,
    nid: payload.nid,
    profilePhoto: photolink,
    guardian: payload.guardian,
    guardianAddress: payload.guardianAddress,
  };

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: userData,
    });

    const admin = await tx.admin.create({
      data: adminData,
    });

    return admin;
  });

  return { admin: result };
};

const createModaretor = async (payload: any, photoDirectory: string) => {
  const photolink = (await fileUpload.upload_to_cloudinary(
    photoDirectory
  )) as string;

  console.log(photolink);
  const hashPassword = bcrypt.hashSync(payload.password, 12);

  const userData = {
    password: hashPassword,
    email: payload.email,
    role: UserRoles.MODARETOR,
  };

  const modaretorData = {
    name: payload.name,
    email: payload.email,
    contactNo: payload.contactNo,
    presentAddress: payload.presentAddress,
    permanentAddress: payload.permanentAddress,
    nid: payload.nid,
    profilePhoto: photolink,
    guardian: payload.guardian,
    guardianAddress: payload.guardianAddress,
  };

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: userData,
    });

    const modaretor = await tx.modaretor.create({
      data: modaretorData,
    });

    return modaretor;
  });

  return { modaretor: result };
};

const createInterviewer = async (payload: any, photoDirectory: string) => {
  const photolink = (await fileUpload.upload_to_cloudinary(
    photoDirectory
  )) as string;

  console.log(photolink);
  const hashPassword = bcrypt.hashSync(payload.password, 12);

  const userData = {
    password: hashPassword,
    email: payload.email,
    role: UserRoles.INTERVIEWER,
  };

  const interviewerData = {
    name: payload.name,
    email: payload.email,
    contactNo: payload.contactNo,
    presentAddress: payload.presentAddress,
    permanentAddress: payload.permanentAddress,
    nid: payload.nid,
    profilePhoto: photolink,
    guardian: payload.guardian,
    guardianAddress: payload.guardianAddress,
  };

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: userData,
    });

    const interviewer = await tx.interviewer.create({
      data: interviewerData,
    });

    return interviewer;
  });

  return { interviewer: result };
};

const createSelector = async (payload: any, photoDirectory: string) => {
  const photolink = (await fileUpload.upload_to_cloudinary(
    photoDirectory
  )) as string;

  console.log(photolink);
  const hashPassword = bcrypt.hashSync(payload.password, 12);

  const userData = {
    password: hashPassword,
    email: payload.email,
    role: UserRoles.SELECTOR,
  };

  const selectorData = {
    name: payload.name,
    email: payload.email,
    contactNo: payload.contactNo,
    presentAddress: payload.presentAddress,
    permanentAddress: payload.permanentAddress,
    nid: payload.nid,
    profilePhoto: photolink,
    guardian: payload.guardian,
    guardianAddress: payload.guardianAddress,
  };

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: userData,
    });

    const selector = await tx.selector.create({
      data: selectorData,
    });

    return selector;
  });

  return { selector: result };
};

const createApplicant = async (payload: any, photoDirectory: string) => {
  const photolink = (await fileUpload.upload_to_cloudinary(
    photoDirectory
  )) as string;

  console.log(photolink);
  const hashPassword = bcrypt.hashSync(payload.password, 12);

  const userData = {
    password: hashPassword,
    email: payload.email,
    role: UserRoles.APPLICANT,
  };

  const applicantData = {
    name: payload.name,
    email: payload.email,
    contactNo: payload.contactNo,
    married: payload.married,
    address: payload.address,
    profilePhoto: photolink,
    employmentStatus: payload.employmentStatus,
    graduated: payload.graduated,
  };

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: userData,
    });

    const applicant = await tx.applicant.create({
      data: applicantData,
    });

    return applicant;
  });

  return { applicant: result };
};

const createCompany = async (payload: any, photoDirectory: string) => {
  const logolink = (await fileUpload.upload_to_cloudinary(
    photoDirectory
  )) as string;

  console.log(logolink);
  const hashPassword = bcrypt.hashSync(payload.password, 12);

  const userData = {
    password: hashPassword,
    email: payload.email,
    role: UserRoles.COMPANY,
  };

  const companyData = {
    email: payload.email,
    company: payload.company,
    contactNo: payload.contactNo,
    address: payload.address,
    profilePhoto: logolink,
  };

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: userData,
    });

    const company = await tx.company.create({
      data: companyData,
    });

    return company;
  });

  return { company: result };
};

const allUsers = async (query: any) => {
  const filterFields = ["email", "role", "status"];
  const searchFields = ["email"];
  const andWhere: Prisma.UserWhereInput[] = querybuilder(
    query,
    filterFields,
    searchFields
  );

  const { page, limit, sortBy, sortOrder } = paginationandSorting(query);

  const result = await prisma.user.findMany({
    where: { AND: andWhere },
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      [sortBy as string]: sortOrder,
    },
    select: {
      id: true,
      email: true,
      role: true,
      status: true,
      needPasswordChange: true,
      createdAt: true,
      updatedAt: true,
      admin: true,
      modaretor: true,
    },
    // include: {
    //   admin: true, //include and select are not work togather
    // }, //include er kaj select er vetorew kora jai
  });

  const total = await prisma.user.count({
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

const changeStatus = async (id: string, newStatus: { status: UserStatus }) => {
  const userData = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, "user not found");
  }

  const updateData = await prisma.user.update({
    where: {
      id: id,
    },
    data: newStatus,
  });

  return updateData;
};

const getMe = async (id: string, role: UserRoles) => {
  const relationTable = role.toLocaleLowerCase();

  console.log(relationTable);

  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      id: true,
      role: true,
      status: true,
      [relationTable]: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return userData;
};

const updateMe = async (
  email: string,
  role: UserRoles,
  updateData: any,
  photoDirectory: string
) => {
  console.log(updateData);
  if (photoDirectory) {
    const photolink = (await fileUpload.upload_to_cloudinary(
      photoDirectory
    )) as string;

    updateData.profilePhoto = photolink;
  }
  if (role == UserRoles.ADMIN) {
    const updateUser = await prisma.admin.update({
      where: {
        email: email,
      },
      data: updateData,
    });
    return updateUser;
  }
  if (role == UserRoles.MODARETOR) {
    const updateUser = await prisma.modaretor.update({
      where: {
        email: email,
      },
      data: updateData,
    });
    return updateUser;
  }
  if (role == UserRoles.INTERVIEWER) {
    const updateUser = await prisma.interviewer.update({
      where: {
        email: email,
      },
      data: updateData,
    });
    return updateUser;
  }
  if (role == UserRoles.SELECTOR) {
    const updateUser = await prisma.selector.update({
      where: {
        email: email,
      },
      data: updateData,
    });

    return updateUser;
  }
  if (role == UserRoles.COMPANY) {
    const updateUser = await prisma.company.update({
      where: {
        email: email,
      },
      data: updateData,
    });
    return updateUser;
  }
  if (role == UserRoles.APPLICANT) {
    const updateUser = await prisma.applicant.update({
      where: {
        email: email,
      },
      data: updateData,
    });
    return updateUser;
  }
};

export const userServices = {
  createAdmin,
  createModaretor,
  createInterviewer,
  createSelector,
  createApplicant,
  createCompany,
  allUsers,
  changeStatus,
  getMe,
  updateMe,
};
