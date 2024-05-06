import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const Device = new PrismaClient().device;
export const getAllDevice = async (req, res) => {
  try {
    const allDevice = await Device.findMany({});
    res.status(200).json({ data: allDevice });
  } catch (e) {
    console.log(e);
  }
};

export const getDeviceById = async (req, res) => {
  try {
    const DeviceID = req.params.id;
    const DeviceItem = await Device.findUnique({
      where: {
        id: Number(DeviceID),
      },
    });

    res.status(200).json({ data: DeviceItem });
  } catch (e) {
    console.log(e);
  }
};

export const createDevice = async (req, res) => {
  try {
    const DeviceData = req.body;
    const DeviceItem = await Device.create({
      data: DeviceData,
    });

    res.status(201).json({ data: DeviceItem });
  } catch (e) {
    console.log(e);
  }
};

export const updateDevice = async (req, res) => {
  try {
    const DeviceID = req.params.id;
    const DeviceData = req.body;

    const DeviceItem = await Device.update({
      where: {
        id: Number(DeviceID),
      },
      data: DeviceData,
    });

    res.status(200).json({ data: DeviceItem });
  } catch (e) {
    console.log(e);
  }
};

export const deleteDevice = async (req, res) => {
  try {
    const DeviceID = req.params.id;
    const DeviceItem = await Device.delete({
      where: {
        id: Number(DeviceID),
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

const DeviceRouter = Router();
DeviceRouter.get("/", getAllDevice);
DeviceRouter.get("/:id", getDeviceById);
DeviceRouter.post("/", createDevice);
DeviceRouter.put("/:id", updateDevice);
DeviceRouter.delete("/:id", deleteDevice);
export default DeviceRouter;
