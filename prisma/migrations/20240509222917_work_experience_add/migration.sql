-- CreateTable
CREATE TABLE "workExperience" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "responsibilities" TEXT NOT NULL,

    CONSTRAINT "workExperience_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "workExperience" ADD CONSTRAINT "workExperience_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "applicants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
