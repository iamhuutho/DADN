import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const DashBoard = new PrismaClient().dashBoard;
export const getAllDashBoard = async (req, res) => {
  try {
    const allDashBoard = await DashBoard.findMany({});
    res.status(200).json({ data: allDashBoard });
  } catch (e) {
    console.log(e);
  }
};

export const getDashBoardById = async (req, res) => {
  try {
    const DashBoardID = req.params.id;
    const DashBoardItem = await DashBoard.findUnique({
      where: {
        id: Number(DashBoardID),
      },
    });

    res.status(200).json({ data: DashBoardItem });
  } catch (e) {
    console.log(e);
  }
};

export const createDashBoard = async (req, res) => {
  try {
    const DashBoardData = req.body;
    const DashBoardItem = await DashBoard.create({
      data: DashBoardData,
    });

    res.status(201).json({ data: DashBoardItem });
  } catch (e) {
    console.log(e);
  }
};

export const updateDashBoard = async (req, res) => {
  try {
    const DashBoardID = req.params.id;
    const DashBoardData = req.body;

    const DashBoardItem = await DashBoard.update({
      where: {
        id: Number(DashBoardID),
      },
      data: DashBoardData,
    });

    res.status(200).json({ data: DashBoardItem });
  } catch (e) {
    console.log(e);
  }
};

export const deleteDashBoard = async (req, res) => {
  try {
    const DashBoardID = req.params.id;
    const DashBoardItem = await DashBoard.delete({
      where: {
        id: Number(DashBoardID),
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

const DashBoardRouter = Router();
DashBoardRouter.get("/", getAllDashBoard);
DashBoardRouter.get("/:id", getDashBoardById);
DashBoardRouter.post("/", createDashBoard);
DashBoardRouter.put("/:id", updateDashBoard);
DashBoardRouter.delete("/:id", deleteDashBoard);
export default DashBoardRouter;
