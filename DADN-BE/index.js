import express, { request, response } from "express";
import UserRouter from "./apis/userAPI.js";
import DeviceRouter from "./apis/userAPI.js";
import LightBuilbRouter from "./apis/lightbuilbAPI.js";
import PhoneRouter from "./apis/phoneAPI.js";
import AutomationRouter from "./apis/automationAPI.js";
import AutomationTaskRouter from "./apis/automationTaskAPI.js";
import DashBoardRouter from "./apis/dashboardAPI.js";
import DashBoardInfoRouter from "./apis/dashboardInfoAPI.js";
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
app.use("/device", DeviceRouter);
app.use("/lightbulb", LightBuilbRouter);
app.use("/phone", PhoneRouter);
app.use("/automation", AutomationRouter);
app.use("/automation_task", AutomationTaskRouter);
app.use("/dashboard", DashBoardRouter);
app.use("/dashboard_info", DashBoardInfoRouter);

app.listen(port, () => {
  console.log("SERVER LISTENING");
});
