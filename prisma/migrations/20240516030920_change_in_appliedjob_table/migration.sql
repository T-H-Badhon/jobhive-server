-- AlterTable
ALTER TABLE "AppliedJob" ADD COLUMN     "isHired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isSelected" BOOLEAN NOT NULL DEFAULT false;
