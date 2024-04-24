import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const Voucher = new PrismaClient().voucher;
export const getAllVoucher = async (req, res) => {
  try {
    const allVoucher = await Voucher.findMany({});

    res.status(200).json({ data: allVoucher });
  } catch (e) {
    console.log(e);
  }
};

export const getVoucherById = async (req, res) => {
  try {
    const VoucherID = req.params.id;
    const VoucherItem = await Voucher.findUnique({
      where: {
        id: Number(VoucherID),
      },
    });

    res.status(200).json({ data: VoucherItem });
  } catch (e) {
    console.log(e);
  }
};

export const createVoucher = async (req, res) => {
  try {
    const VoucherData = req.body;
    const VoucherItem = await Voucher.create({
      data: VoucherData,
    });

    res.status(201).json({ data: VoucherItem });
  } catch (e) {
    console.log(e);
  }
};

export const updateVoucher = async (req, res) => {
  try {
    const VoucherID = req.params.id;
    const VoucherData = req.body;

    const VoucherItem = await Voucher.update({
      where: {
        id: Number(VoucherID),
      },
      data: VoucherData,
    });

    res.status(200).json({ data: VoucherItem });
  } catch (e) {
    console.log(e);
  }
};

export const deleteVoucher = async (req, res) => {
  try {
    const VoucherID = req.params.id;
    const VoucherItem = await Voucher.delete({
      where: {
        id: Number(VoucherID),
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

const VoucherRouter = Router();
VoucherRouter.get("/", getAllVoucher);
VoucherRouter.get("/:id", getVoucherById);
VoucherRouter.post("/", createVoucher);
VoucherRouter.put("/:id", updateVoucher);
VoucherRouter.delete("/:id", deleteVoucher);
export default VoucherRouter;
