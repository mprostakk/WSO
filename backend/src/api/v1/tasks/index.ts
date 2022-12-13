import express from "express";
import TasksController from "./controller";
import idRouter from "./id";
import validators from "./validators";

const tasksRouter = express.Router({});

tasksRouter.all("*", validators.all);

tasksRouter.use("/id/:taskId", idRouter);

tasksRouter.get("/", validators.get, TasksController.get);

export default tasksRouter;
