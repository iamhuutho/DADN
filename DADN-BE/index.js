import express, { request, response } from "express";
import userAPI from "./apis/userAPI.js";
import ProductRouter from "./apis/productAPI.js";
import orderRouter from "./apis/orderAPI.js";
import VoucherRouter from "./apis/voucherAPI.js";
import UserRouter from "./apis/userAPI.js";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const app = express();
const port = 8080;

console.log("First Step");
app.get("/", (request, response) => {
  return response.status(234).send("This is a sample message");
});

app.use(
  cors({
    origin: ["http://localhost:8080"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/user", UserRouter);
app.use("/product", ProductRouter);
app.use("/order", orderRouter);
app.use("/voucher", VoucherRouter);

app.listen(port, () => {
  console.log("SERVER LISTENING");
});

