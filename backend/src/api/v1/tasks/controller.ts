import Express from "express";
import { Controller, success } from "../../../common";
import TaskModel from "../../../db/Task";
import { Task } from "../../../db/Task/index.types";
import { Tasks } from "./index.types";

class TasksController {
  @Controller
  static async get(
    req: Tasks.Get["request"],
    res: Tasks.Get["response"],
    next: Express.NextFunction
  ) {
    const { query, params } = req;
    const {} = params;
    const {} = query;

    const tasksDocuments = await TaskModel.find();
    const tasks = tasksDocuments.map((taskDocument) =>
      taskDocument.toObject<Task.Lean>()
    );
    const tasksWithOneUnitTest = tasks.map((task) => ({
      ...task,
      unitTests: [task.unitTests[0]],
    }));

    res.status(200).json(success({ tasks: tasksWithOneUnitTest }));
  }
}

export default TasksController;
