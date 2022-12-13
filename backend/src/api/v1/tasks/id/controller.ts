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
    const { query, params, body } = req;
    const {} = params;
    const {} = query;
    const { locals } = res;
    const { taskDocument } = locals;
    const task = taskDocument.toObject();

    res.status(200).json(success({ task }));
  }
}

export default IdController;
