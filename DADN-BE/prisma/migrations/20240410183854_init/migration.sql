/*
  Warnings:

  - The `gender` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'MALE';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'MALE';