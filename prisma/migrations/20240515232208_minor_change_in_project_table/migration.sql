/*
  Warnings:

  - Added the required column `applicantId` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project" ADD COLUMN     "applicantId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "applicants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
