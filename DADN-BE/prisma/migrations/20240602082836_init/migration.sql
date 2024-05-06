/*
  Warnings:

  - You are about to drop the column `battery` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `mode` on the `Device` table. All the data in the column will be lost.
  - Added the required column `light` to the `LightBulb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Device" DROP COLUMN "battery",
DROP COLUMN "mode";

-- AlterTable
ALTER TABLE "LightBulb" ADD COLUMN     "light" INTEGER NOT NULL;
