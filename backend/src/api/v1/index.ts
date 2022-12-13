import express from "express";
import withAccount from "../../middlewares/withAccount";
import tasksRouter from "./tasks";
import validators from "./validators";

const v1Router = express.Router({});

//v1Router.all("*", validators.all);

v1Router.use(withAccount);

v1Router.use("/tasks", tasksRouter);

export default v1Router;
