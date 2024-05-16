import { PrismaClient, User, UserRoles } from "@prisma/client";
import { configs } from "../../config/config";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const seedSuperAdmin = async () => {
  const isExsist = await prisma.user.findFirst({
    where: {
      role: UserRoles.SUPERADMIN,
    },
  });

  if (isExsist) {
    return;
  }

  const superData = {
    password: bcrypt.hashSync(
      configs.superAdminPassword as string,
      Number(configs.salt)
    ),
    email: configs.superAdminEmail as string,
    role: UserRoles.SUPERADMIN,
    needPasswordChange: false,
  };

  const superAdmin = await prisma.user.create({
    data: superData,
  });

  console.log(superAdmin);

  return;
};
