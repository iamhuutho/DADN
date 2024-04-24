import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const product = new PrismaClient().product;
export const getAllProduct = async (req, res) => {
  try {
    const allProduct = await product.findMany({});

    res.status(200).json({ data: allProduct });
  } catch (e) {
    console.log(e);
  }
};

export const getProductById = async (req, res) => {
  try {
    const ProductID = req.params.id;
    const ProductItem = await product.findUnique({
      where: {
        id: Number(ProductID),
      },
    });

    res.status(200).json({ data: ProductItem });
  } catch (e) {
    console.log(e);
  }
};

export const createProduct = async (req, res) => {
  try {
    const ProductData = req.body;
    const ProductItem = await product.create({
      data: ProductData,
    });

    res.status(201).json({ data: ProductItem });
  } catch (e) {
    console.log(e);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const ProductID = req.params.id;
    const ProductData = req.body;

    const ProductItem = await product.update({
      where: {
        id: Number(ProductID),
      },
      data: ProductData,
    });

    res.status(200).json({ data: ProductItem });
  } catch (e) {
    console.log(e);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const ProductID = req.params.id;
    const ProductItem = await product.delete({
      where: {
        id: Number(ProductID),
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

const ProductRouter = Router();
ProductRouter.get("/", getAllProduct);
ProductRouter.get("/:id", getProductById);
ProductRouter.post("/", createProduct);
ProductRouter.put("/:id", updateProduct);
ProductRouter.delete("/:id", deleteProduct);
export default ProductRouter;
