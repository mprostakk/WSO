import Express from "express";
import { Controller, success } from "../../../common";
import TaskModel from "../../../db/Task";
import { Tasks } from "./index.types";

class TasksController {
  @Controller
  static async get(
    req: Tasks.Get["request"],
    res: Tasks.Get["response"],
    next: Express.NextFunction
  ) {
    const { query, params, body } = req;
    const {} = params;
    const {} = body;
    const {} = query;

    const tasks = await TaskModel.find();
    res.status(200).json(success({ tasks }));
  }
}

export default TasksController;
