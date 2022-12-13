import Express from "express";
import { Controller, success } from "../../../../../common";
import SolutionModel from "../../../../../db/Solution";
import { Solutions } from "./index.types";

class SolutionsController {
  @Controller
  static async post(
    req: Solutions.Post["request"],
    res: Solutions.Post["response"],
    next: Express.NextFunction
  ) {
    const { query, params, body } = req;
    const {} = params;
    const { stdin } = body;
    const {} = query;
    const { locals } = res;
    const { task, account } = locals;
    // TODO
    const solutionDocument = new SolutionModel({}); // TODO
    await solutionDocument.save();
    const solution = solutionDocument.toObject();

    res.status(201).json(success({ solution }));
  }
}

export default SolutionsController;
