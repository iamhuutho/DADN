import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const order = new PrismaClient().order;
export const getAllOrder = async (req, res) => {
  try {
    const allOrder = await order.findMany({});

    res.status(200).json({ data: allOrder });
  } catch (e) {
    console.log(e);
  }
};

export const getOrderById = async (req, res) => {
  try {
    const orderID = req.params.id;
    const orderItem = await order.findUnique({
      where: {
        id: Number(orderID),
      },
    });

    res.status(200).json({ data: orderItem });
  } catch (e) {
    console.log(e);
  }
};

export const createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const orderItem = await order.create({
      data: orderData,
    });

    res.status(201).json({ data: orderItem });
  } catch (e) {
    console.log(e);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const orderID = req.params.id;
    const orderData = req.body;

    const orderItem = await order.update({
      where: {
        id: Number(orderID),
      },
      data: orderData,
    });

    res.status(200).json({ data: orderItem });
  } catch (e) {
    console.log(e);
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const orderID = req.params.id;
    const orderItem = await order.delete({
      where: {
        id: Number(orderID),
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

const orderRouter = Router();
orderRouter.get("/", getAllOrder);
orderRouter.get("/:id", getOrderById);
orderRouter.post("/", createOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);
export default orderRouter;
