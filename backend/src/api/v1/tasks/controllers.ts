import Express from "express";
import { Controller, success } from "../../../common";
import { GetTasksEndpoint } from "./index.types";

class TasksController {
  @Controller
  static async getTasks(
    req: GetTasksEndpoint["request"],
    res: GetTasksEndpoint["response"],
    next: Express.NextFunction
  ) {
    const { query, params, body } = req;
    const {} = params;
    const {} = body;
    const {} = query;

    const tasks: any[] = [];
    res.status(200).json(success({ tasks: [] }));
  }

  @Controller
  static async getTask(
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) {
    const { query, params, body } = req;
    const { taskId } = params;
    const {} = body;
    const {} = query;

    const task: any = {};
    res.status(200).json(success({ task }));
  }
}

export default TasksController;
