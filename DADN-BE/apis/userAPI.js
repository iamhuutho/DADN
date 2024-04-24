import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const User = new PrismaClient().user;
export const getAllUser = async (req, res) => {
  try {
    const allUser = await User.findMany({});

    res.status(200).json({ data: allUser });
  } catch (e) {
    console.log(e);
  }
};

export const getUserById = async (req, res) => {
  try {
    const UserID = req.params.id;
    const UserItem = await User.findUnique({
      where: {
        id: Number(UserID),
      },
    });

    res.status(200).json({ data: UserItem });
  } catch (e) {
    console.log(e);
  }
};

export const createUser = async (req, res) => {
  try {
    const UserData = req.body;
    const UserItem = await User.create({
      data: UserData,
    });

    res.status(201).json({ data: UserItem });
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (req, res) => {
  try {
    const UserID = req.params.id;
    const UserData = req.body;

    const UserItem = await User.update({
      where: {
        id: Number(UserID),
      },
      data: UserData,
    });

    res.status(200).json({ data: UserItem });
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const UserID = req.params.id;
    const UserItem = await User.delete({
      where: {
        id: Number(UserID),
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};

const UserRouter = Router();
UserRouter.get("/", getAllUser);
UserRouter.get("/:id", getUserById);
UserRouter.post("/", createUser);
UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);
export default UserRouter;
