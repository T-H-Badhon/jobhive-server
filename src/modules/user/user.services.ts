import { Admin, PrismaClient, UserRoles } from "@prisma/client";
import bcrypt from "bcrypt";
import { fileUpload } from "../../utilities/fileUploader";

const prisma = new PrismaClient();

const createAdmin = async (payload: any, photoDirectory: string) => {
  const photolink = (await fileUpload.upload_to_cloudinary(
    photoDirectory,
    payload.nid
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
    photoDirectory,
    payload.nid
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
    photoDirectory,
    payload.nid
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
    photoDirectory,
    payload.nid
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

export const userServices = {
  createAdmin,
  createModaretor,
  createInterviewer,
  createSelector,
};
