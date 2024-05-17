-- CreateTable
CREATE TABLE "applicantSkill" (
    "applicantId" TEXT NOT NULL,
    "technologyId" TEXT NOT NULL,

    CONSTRAINT "applicantSkill_pkey" PRIMARY KEY ("applicantId","technologyId")
);

-- AddForeignKey
ALTER TABLE "applicantSkill" ADD CONSTRAINT "applicantSkill_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "applicants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applicantSkill" ADD CONSTRAINT "applicantSkill_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "technology"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
