-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRUCTUAL');

-- AlterTable
ALTER TABLE "applicants" ADD COLUMN     "resumeLink" TEXT;

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "vacancy" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "deadline" TIMESTAMP(3) NOT NULL,
    "salary" INTEGER NOT NULL,
    "employmentType" "EmploymentType" NOT NULL,
    "requirement" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppliedJob" (
    "applicantId" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,

    CONSTRAINT "AppliedJob_pkey" PRIMARY KEY ("applicantId","jobId")
);

-- AddForeignKey
ALTER TABLE "AppliedJob" ADD CONSTRAINT "AppliedJob_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "applicants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppliedJob" ADD CONSTRAINT "AppliedJob_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
