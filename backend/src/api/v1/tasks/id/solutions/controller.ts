import Express from "express";
import { Controller, success } from "../../../../../common";
import SolutionModel from "../../../../../db/Solution";
import { Solutions } from "./index.types";
import { Solution } from "../../../../../db/Solution/index.types";
import axios from "axios";

class SolutionsController {
  @Controller
  static async post(
    req: Solutions.Post["request"],
    res: Solutions.Post["response"],
    next: Express.NextFunction
  ) {
    const { query, params, body } = req;
    const {} = params;
    const { code } = body;
    const {} = query;
    const { locals } = res;
    const { taskDocument, account } = locals;
    
    var testResults = [];
    for (const testCase of taskDocument.unitTests) {
      const data = {
        language: "python",
        version: "3.9.4",
        files: [
          {
            name: "run.py",
            content: code,
          },
        ],
        stdin: testCase.stdin,
        args: [],
        compile_timeout: 3000,
        run_timeout: 3000,
        compile_memory_limit: -1,
        run_memory_limit: -1,
      };
      const response = await axios.post("http://piston:2000/api/v2/execute", data);
      // testResults.push(new UnitTestResult<UnitTestResult>())
    }

    const solutionDocument = new SolutionModel<Solution>({
      taskId: taskDocument.id,
      accountId: account.id,
      code: code,
      unitTestsResults: []
    });
    await solutionDocument.save();
    const solution = solutionDocument.toObject();

    res.status(201).json(success({ solution }));
  }
}

export default SolutionsController;
