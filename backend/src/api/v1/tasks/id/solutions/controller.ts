import Express from "express";
import { Controller, success } from "../../../../../common";
import SolutionModel from "../../../../../db/Solution";
import { Solutions } from "./index.types";
import { Solution } from "../../../../../db/Solution/index.types";
import axios from "axios";
import { UnitTestResult } from "../../../../../db/Solution/UnitTestResult/index.types";

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
    
    var testResults: UnitTestResult[] = [];
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
      const isPassed = response.data.run.output === testCase.stdout;
      testResults.push({
        isPassed,
        runtime: 1,
        usedMemory: 1
      })
    }

    const solutionDocument = new SolutionModel<Solution>({
      taskId: taskDocument.id,
      accountId: account.id,
      code: code,
      unitTestsResults: testResults
    });
    await solutionDocument.save();
    const solution = solutionDocument.toObject();

    res.status(201).json(success({ solution }));
  }
}

export default SolutionsController;
