import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const LightBuilb = new PrismaClient().lightBulb;
export const getAllLightBuilb = async (req, res) => {
  try {
    const allLightBuilb = await LightBuilb.findMany({});

    res.status(200).json({ data: allLightBuilb });
  } catch (e) {
    console.log(e);
  }
};

export const getLightBuilbById = async (req, res) => {
  try {
    const LightBuilbID = req.params.id;
    const LightBuilbItem = await LightBuilb.findUnique({
      where: {
        id: Number(LightBuilbID),
      },
    });

    res.status(200).json({ data: LightBuilbItem });
  } catch (e) {
    console.log(e);
  }
};

export const createLightBuilb = async (req, res) => {
  try {
    const LightBuilbData = req.body;
    const LightBuilbItem = await LightBuilb.create({
      data: LightBuilbData,
    });

    res.status(201).json({ data: LightBuilbItem });
  } catch (e) {
    console.log(e);
  }
};

export const updateLightBuilb = async (req, res) => {
  try {
    const LightBuilbID = req.params.id;
    const LightBuilbData = req.body;

    const LightBuilbItem = await LightBuilb.update({
      where: {
        id: Number(LightBuilbID),
      },
      data: LightBuilbData,
    });

    res.status(200).json({ data: LightBuilbItem });
  } catch (e) {
    console.log(e);
  }
};

export const deleteLightBuilb = async (req, res) => {
  try {
    const LightBuilbID = req.params.id;
    const LightBuilbItem = await LightBuilb.delete({
      where: {
        id: Number(LightBuilbID),
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

const LightBuilbRouter = Router();
LightBuilbRouter.get("/", getAllLightBuilb);
LightBuilbRouter.get("/:id", getLightBuilbById);
LightBuilbRouter.post("/", createLightBuilb);
LightBuilbRouter.put("/:id", updateLightBuilb);
LightBuilbRouter.delete("/:id", deleteLightBuilb);
export default LightBuilbRouter;
