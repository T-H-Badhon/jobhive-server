/*
  Warnings:

  - You are about to drop the column `guardian` on the `applicants` table. All the data in the column will be lost.
  - You are about to drop the column `guardianAddress` on the `applicants` table. All the data in the column will be lost.
  - You are about to drop the column `nid` on the `applicants` table. All the data in the column will be lost.
  - You are about to drop the column `permanentAddress` on the `applicants` table. All the data in the column will be lost.
  - You are about to drop the column `presentAddress` on the `applicants` table. All the data in the column will be lost.
  - Added the required column `address` to the `applicants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employmentStatus` to the `applicants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `graduated` to the `applicants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `married` to the `applicants` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EmploymentStatus" AS ENUM ('WORKING', 'UNEMPLOYED');

-- DropIndex
DROP INDEX "applicants_nid_key";

-- AlterTable
ALTER TABLE "applicants" DROP COLUMN "guardian",
DROP COLUMN "guardianAddress",
DROP COLUMN "nid",
DROP COLUMN "permanentAddress",
DROP COLUMN "presentAddress",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "employmentStatus" "EmploymentStatus" NOT NULL,
ADD COLUMN     "graduated" BOOLEAN NOT NULL,
ADD COLUMN     "married" BOOLEAN NOT NULL;
