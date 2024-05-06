import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const Automation = new PrismaClient().automation;
export const getAllAutomation = async (req, res) => {
  try {
    const allAutomation = await Automation.findMany({});
    res.status(200).json({ data: allAutomation });
  } catch (e) {
    console.log(e);
  }
};

export const getAutomationById = async (req, res) => {
  try {
    const AutomationID = req.params.id;
    const AutomationItem = await Automation.findUnique({
      where: {
        id: Number(AutomationID),
      },
    });

    res.status(200).json({ data: AutomationItem });
  } catch (e) {
    console.log(e);
  }
};

export const createAutomation = async (req, res) => {
  try {
    const AutomationData = req.body;
    const AutomationItem = await Automation.create({
      data: AutomationData,
    });

    res.status(201).json({ data: AutomationItem });
  } catch (e) {
    console.log(e);
  }
};

export const updateAutomation = async (req, res) => {
  try {
    const AutomationID = req.params.id;
    const AutomationData = req.body;

    const AutomationItem = await Automation.update({
      where: {
        id: Number(AutomationID),
      },
      data: AutomationData,
    });

    res.status(200).json({ data: AutomationItem });
  } catch (e) {
    console.log(e);
  }
};

export const deleteAutomation = async (req, res) => {
  try {
    const AutomationID = req.params.id;
    const AutomationItem = await Automation.delete({
      where: {
        id: Number(AutomationID),
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

const AutomationRouter = Router();
AutomationRouter.get("/", getAllAutomation);
AutomationRouter.get("/:id", getAutomationById);
AutomationRouter.post("/", createAutomation);
AutomationRouter.put("/:id", updateAutomation);
AutomationRouter.delete("/:id", deleteAutomation);
export default AutomationRouter;
