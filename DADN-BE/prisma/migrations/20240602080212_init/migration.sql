/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "REPEAT" AS ENUM ('EVERYDAY', 'EVERYWEEKEND');

-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "battery" INTEGER NOT NULL,
    "mode" INTEGER NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LightBulb" (
    "id" SERIAL NOT NULL,
    "battery" INTEGER NOT NULL,
    "mode" INTEGER NOT NULL,
    "deviceId" INTEGER NOT NULL,

    CONSTRAINT "LightBulb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TVRemote" (
    "id" SERIAL NOT NULL,
    "battery" INTEGER NOT NULL,
    "mode" INTEGER NOT NULL,
    "deviceId" INTEGER NOT NULL,

    CONSTRAINT "TVRemote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phone" (
    "id" SERIAL NOT NULL,
    "battery" INTEGER NOT NULL,
    "mode" INTEGER NOT NULL,
    "deviceId" INTEGER NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Automation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Automation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutomationTask" (
    "id" SERIAL NOT NULL,
    "automationId" INTEGER NOT NULL,
    "taskname" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "repeat" "REPEAT" NOT NULL DEFAULT 'EVERYDAY',

    CONSTRAINT "AutomationTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sensor" (
    "id" SERIAL NOT NULL,
    "humidity" INTEGER NOT NULL,
    "light" INTEGER NOT NULL,
    "temperature" INTEGER NOT NULL,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DashBoard" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "DashBoard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DashBoardInfo" (
    "id" SERIAL NOT NULL,
    "dashboardId" INTEGER NOT NULL,
    "humidity" INTEGER NOT NULL,
    "light" INTEGER NOT NULL,
    "temperature" INTEGER NOT NULL,

    CONSTRAINT "DashBoardInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LightBulb_deviceId_key" ON "LightBulb"("deviceId");

-- CreateIndex
CREATE UNIQUE INDEX "TVRemote_deviceId_key" ON "TVRemote"("deviceId");

-- CreateIndex
CREATE UNIQUE INDEX "Phone_deviceId_key" ON "Phone"("deviceId");

-- CreateIndex
CREATE UNIQUE INDEX "DashBoard_userId_key" ON "DashBoard"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "LightBulb" ADD CONSTRAINT "LightBulb_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TVRemote" ADD CONSTRAINT "TVRemote_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phone" ADD CONSTRAINT "Phone_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Automation" ADD CONSTRAINT "Automation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutomationTask" ADD CONSTRAINT "AutomationTask_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "Automation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DashBoard" ADD CONSTRAINT "DashBoard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DashBoardInfo" ADD CONSTRAINT "DashBoardInfo_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "DashBoard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
