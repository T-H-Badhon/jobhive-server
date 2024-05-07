/*
  Warnings:

  - You are about to drop the column `companyLogo` on the `companies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "companies" DROP COLUMN "companyLogo",
ADD COLUMN     "profilePhoto" TEXT;

-- CreateTable
CREATE TABLE "educationalQualifications" (
    "id" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "institute" TEXT NOT NULL,
    "passingYear" TEXT NOT NULL,
    "cGPA" DOUBLE PRECISION NOT NULL,
    "scale" INTEGER NOT NULL,

    CONSTRAINT "educationalQualifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicantEducation" (
    "applicantId" TEXT NOT NULL,
    "qualificationId" TEXT NOT NULL,

    CONSTRAINT "ApplicantEducation_pkey" PRIMARY KEY ("applicantId","qualificationId")
);

-- AddForeignKey
ALTER TABLE "ApplicantEducation" ADD CONSTRAINT "ApplicantEducation_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "applicants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicantEducation" ADD CONSTRAINT "ApplicantEducation_qualificationId_fkey" FOREIGN KEY ("qualificationId") REFERENCES "educationalQualifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
