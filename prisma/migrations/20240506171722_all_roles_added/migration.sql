-- CreateTable
CREATE TABLE "modaretors" (
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

    CONSTRAINT "modaretors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL DEFAULT 'unknown',
    "email" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "companyLogo" TEXT,
    "presentAddress" TEXT NOT NULL,
    "permanentAddress" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interviewers" (
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

    CONSTRAINT "interviewers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "selectors" (
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

    CONSTRAINT "selectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applicants" (
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
    "resume" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "applicants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "modaretors_email_key" ON "modaretors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "modaretors_nid_key" ON "modaretors"("nid");

-- CreateIndex
CREATE UNIQUE INDEX "companies_email_key" ON "companies"("email");

-- CreateIndex
CREATE UNIQUE INDEX "interviewers_email_key" ON "interviewers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "interviewers_nid_key" ON "interviewers"("nid");

-- CreateIndex
CREATE UNIQUE INDEX "selectors_email_key" ON "selectors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "selectors_nid_key" ON "selectors"("nid");

-- CreateIndex
CREATE UNIQUE INDEX "applicants_email_key" ON "applicants"("email");

-- CreateIndex
CREATE UNIQUE INDEX "applicants_nid_key" ON "applicants"("nid");

-- AddForeignKey
ALTER TABLE "modaretors" ADD CONSTRAINT "modaretors_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviewers" ADD CONSTRAINT "interviewers_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "selectors" ADD CONSTRAINT "selectors_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applicants" ADD CONSTRAINT "applicants_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
