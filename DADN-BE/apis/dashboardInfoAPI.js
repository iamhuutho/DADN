import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const DashBoardInfo = new PrismaClient().dashBoardInfo;
export const getAllDashBoardInfo = async (req, res) => {
  try {
    const allDashBoardInfo = await DashBoardInfo.findMany({});
    res.status(200).json({ data: allDashBoardInfo });
  } catch (e) {
    console.log(e);
  }
};

export const getDashBoardInfoById = async (req, res) => {
  try {
    const DashBoardInfoID = req.params.id;
    const DashBoardInfoItem = await DashBoardInfo.findUnique({
      where: {
        id: Number(DashBoardInfoID),
      },
    });

    res.status(200).json({ data: DashBoardInfoItem });
  } catch (e) {
    console.log(e);
  }
};

export const createDashBoardInfo = async (req, res) => {
  try {
    const DashBoardInfoData = req.body;
    const DashBoardInfoItem = await DashBoardInfo.create({
      data: DashBoardInfoData,
    });

    res.status(201).json({ data: DashBoardInfoItem });
  } catch (e) {
    console.log(e);
  }
};

export const updateDashBoardInfo = async (req, res) => {
  try {
    const DashBoardInfoID = req.params.id;
    const DashBoardInfoData = req.body;

    const DashBoardInfoItem = await DashBoardInfo.update({
      where: {
        id: Number(DashBoardInfoID),
      },
      data: DashBoardInfoData,
    });

    res.status(200).json({ data: DashBoardInfoItem });
  } catch (e) {
    console.log(e);
  }
};

export const deleteDashBoardInfo = async (req, res) => {
  try {
    const DashBoardInfoID = req.params.id;
    const DashBoardInfoItem = await DashBoardInfo.delete({
      where: {
        id: Number(DashBoardInfoID),
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

const DashBoardInfoRouter = Router();
DashBoardInfoRouter.get("/", getAllDashBoardInfo);
DashBoardInfoRouter.get("/:id", getDashBoardInfoById);
DashBoardInfoRouter.post("/", createDashBoardInfo);
DashBoardInfoRouter.put("/:id", updateDashBoardInfo);
DashBoardInfoRouter.delete("/:id", deleteDashBoardInfo);
export default DashBoardInfoRouter;
