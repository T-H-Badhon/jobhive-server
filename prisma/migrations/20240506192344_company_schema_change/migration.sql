/*
  Warnings:

  - You are about to drop the column `permanentAddress` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `presentAddress` on the `companies` table. All the data in the column will be lost.
  - Added the required column `address` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" DROP COLUMN "permanentAddress",
DROP COLUMN "presentAddress",
ADD COLUMN     "address" TEXT NOT NULL;
