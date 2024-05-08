/*
  Warnings:

  - You are about to drop the `ApplicantEducation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `applicantId` to the `educationalQualifications` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ApplicantEducation" DROP CONSTRAINT "ApplicantEducation_applicantId_fkey";

-- DropForeignKey
ALTER TABLE "ApplicantEducation" DROP CONSTRAINT "ApplicantEducation_qualificationId_fkey";

-- AlterTable
ALTER TABLE "educationalQualifications" ADD COLUMN     "applicantId" TEXT NOT NULL;

-- DropTable
DROP TABLE "ApplicantEducation";

-- AddForeignKey
ALTER TABLE "educationalQualifications" ADD CONSTRAINT "educationalQualifications_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "applicants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
