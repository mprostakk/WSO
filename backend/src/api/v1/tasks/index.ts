import express from "express";
import TasksController from "./controllers";
import solutionsRouter from "./solutions";

const tasksRouter = express.Router({});

tasksRouter.get("/", TasksController.getTasks);

tasksRouter.get("/:taskId", TasksController.getTask);

tasksRouter.use("/:taskId/solutions", solutionsRouter);

export default tasksRouter;
