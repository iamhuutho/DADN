import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const AutomationTask = new PrismaClient().automationTask;
export const getAllAutomationTask = async (req, res) => {
  try {
    const allAutomationTask = await AutomationTask.findMany({});
    res.status(200).json({ data: allAutomationTask });
  } catch (e) {
    console.log(e);
  }
};

export const getAutomationTaskById = async (req, res) => {
  try {
    const AutomationTaskID = req.params.id;
    const AutomationTaskItem = await AutomationTask.findUnique({
      where: {
        id: Number(AutomationTaskID),
      },
    });

    res.status(200).json({ data: AutomationTaskItem });
  } catch (e) {
    console.log(e);
  }
};

export const createAutomationTask = async (req, res) => {
  try {
    const AutomationTaskData = req.body;
    const AutomationTaskItem = await AutomationTask.create({
      data: AutomationTaskData,
    });

    res.status(201).json({ data: AutomationTaskItem });
  } catch (e) {
    console.log(e);
  }
};

export const updateAutomationTask = async (req, res) => {
  try {
    const AutomationTaskID = req.params.id;
    const AutomationTaskData = req.body;

    const AutomationTaskItem = await AutomationTask.update({
      where: {
        id: Number(AutomationTaskID),
      },
      data: AutomationTaskData,
    });

    res.status(200).json({ data: AutomationTaskItem });
  } catch (e) {
    console.log(e);
  }
};

export const deleteAutomationTask = async (req, res) => {
  try {
    const AutomationTaskID = req.params.id;
    const AutomationTaskItem = await AutomationTask.delete({
      where: {
        id: Number(AutomationTaskID),
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

const AutomationTaskRouter = Router();
AutomationTaskRouter.get("/", getAllAutomationTask);
AutomationTaskRouter.get("/:id", getAutomationTaskById);
AutomationTaskRouter.post("/", createAutomationTask);
AutomationTaskRouter.put("/:id", updateAutomationTask);
AutomationTaskRouter.delete("/:id", deleteAutomationTask);
export default AutomationTaskRouter;
