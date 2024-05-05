import { PrismaClient, UserRoles } from "@prisma/client";
import bcrypt from "bcrypt";
import { fileUpload } from "../../utilities/fileUploader";

const prisma = new PrismaClient();

const createAdmin = async (payload: any, photoDirectory: string) => {
  const photolink = await fileUpload.upload_to_cloudinary(
    photoDirectory,
    payload.nid
  );

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

export const userServices = {
  createAdmin,
};
