import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const Phone = new PrismaClient().phone;
export const getAllPhone = async (req, res) => {
  try {
    const allPhone = await Phone.findMany({});

    res.status(200).json({ data: allPhone });
  } catch (e) {
    console.log(e);
  }
};

export const getPhoneById = async (req, res) => {
  try {
    const PhoneID = req.params.id;
    const PhoneItem = await Phone.findUnique({
      where: {
        id: Number(PhoneID),
      },
    });

    res.status(200).json({ data: PhoneItem });
  } catch (e) {
    console.log(e);
  }
};

export const createPhone = async (req, res) => {
  try {
    const PhoneData = req.body;
    const PhoneItem = await Phone.create({
      data: PhoneData,
    });

    res.status(201).json({ data: PhoneItem });
  } catch (e) {
    console.log(e);
  }
};

export const updatePhone = async (req, res) => {
  try {
    const PhoneID = req.params.id;
    const PhoneData = req.body;

    const PhoneItem = await Phone.update({
      where: {
        id: Number(PhoneID),
      },
      data: PhoneData,
    });

    res.status(200).json({ data: PhoneItem });
  } catch (e) {
    console.log(e);
  }
};

export const deletePhone = async (req, res) => {
  try {
    const PhoneID = req.params.id;
    const PhoneItem = await Phone.delete({
      where: {
        id: Number(PhoneID),
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

const PhoneRouter = Router();
PhoneRouter.get("/", getAllPhone);
PhoneRouter.get("/:id", getPhoneById);
PhoneRouter.post("/", createPhone);
PhoneRouter.put("/:id", updatePhone);
PhoneRouter.delete("/:id", deletePhone);
export default PhoneRouter;
