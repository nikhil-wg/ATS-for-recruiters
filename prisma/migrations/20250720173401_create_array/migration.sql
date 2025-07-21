/*
  Warnings:

  - The `qualification` column on the `Candidate` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `requirement` column on the `Jobpost` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `qualification` column on the `Jobpost` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "qualification",
ADD COLUMN     "qualification" TEXT[];

-- AlterTable
ALTER TABLE "Jobpost" DROP COLUMN "requirement",
ADD COLUMN     "requirement" TEXT[],
DROP COLUMN "qualification",
ADD COLUMN     "qualification" TEXT[];
