/*
  Warnings:

  - The values [MODARETOR] on the enum `UserRoles` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `modaretors` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRoles_new" AS ENUM ('SUPERADMIN', 'ADMIN', 'MODERATOR', 'COMPANY', 'INTERVIEWER', 'SELECTOR', 'APPLICANT');
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "UserRoles_new" USING ("role"::text::"UserRoles_new");
ALTER TYPE "UserRoles" RENAME TO "UserRoles_old";
ALTER TYPE "UserRoles_new" RENAME TO "UserRoles";
DROP TYPE "UserRoles_old";
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'APPLICANT';
COMMIT;

-- DropForeignKey
ALTER TABLE "modaretors" DROP CONSTRAINT "modaretors_email_fkey";

-- DropTable
DROP TABLE "modaretors";

-- CreateTable
CREATE TABLE "moderators" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'unknown',
    "email" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "profilePhoto" TEXT,
    "presentAddress" TEXT NOT NULL,
    "permanentAddress" TEXT NOT NULL,
    "nid" TEXT NOT NULL,
    "guardian" TEXT NOT NULL,
    "guardianAddress" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "moderators_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "moderators_email_key" ON "moderators"("email");

-- CreateIndex
CREATE UNIQUE INDEX "moderators_nid_key" ON "moderators"("nid");

-- AddForeignKey
ALTER TABLE "moderators" ADD CONSTRAINT "moderators_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
