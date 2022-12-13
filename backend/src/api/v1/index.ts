import express from "express";
import tasksRouter from "./tasks";

const v1Router = express.Router({});

v1Router.use("/tasks", tasksRouter);

export default v1Router;
