import Express from "express";
import { Controller, success } from "../../../../common";
import { Id } from "./index.types";

class IdController {
  @Controller
  static async get(
    req: Id.Get["request"],
    res: Id.Get["response"],
    next: Express.NextFunction
  ) {
    const { query, params } = req;
    const {} = params;
    const {} = query;
    const { locals } = res;
    const { taskDocument } = locals;
    const task = taskDocument.toObject();
    const taskWithOneUnitTest = {
      ...task,
      unitTests: [task.unitTests[0]]
    }

    res.status(200).json(success({ task: taskWithOneUnitTest }));
  }
}

export default IdController;
