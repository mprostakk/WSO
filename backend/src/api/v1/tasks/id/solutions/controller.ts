import { UnitTest } from "./../../../../../db/Task/UnitTest/index.types";
import Express from "express";
import { Controller, success } from "../../../../../common";
import SolutionModel from "../../../../../db/Solution";
import { Solutions } from "./index.types";
import { Solution } from "../../../../../db/Solution/index.types";
import axios, { AxiosError } from "axios";
import { UnitTestResult } from "../../../../../db/Solution/UnitTestResult/index.types";

require("custom-env").env(true);

const mapToUnitTestResult = async (payload: {
  unitTest: UnitTest;
  code: string;
}): Promise<UnitTestResult> => {
  const { unitTest, code: content } = payload;
  const { stdin } = unitTest;
  const data = {
    language: "python",
    version: "3.9.4",
    files: [{ name: "run.py", content }],
    stdin: stdin,
    args: [],
    compile_timeout: 3000,
    run_timeout: 3000,
    compile_memory_limit: 100,
    run_memory_limit: 100,
  };
  const response = await axios
    .post(`${process.env.PISTON_URI}/api/v2/execute`, data)
    .catch((error: AxiosError) => {
      return undefined;
    });

  const isPassed = response?.data?.run?.output === unitTest.stdout;
  const unitTestResult: UnitTestResult = {
    isPassed,
    runtime: 1,
    usedMemory: 1,
    returnCode: response?.data?.run?.code,
    signal: response?.data?.run?.signal,
  };
  return unitTestResult;
};

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
    const { unitTests } = taskDocument;

    const unitTestsResults = await Promise.all(
      unitTests.map((unitTest) => mapToUnitTestResult({ unitTest, code }))
    );

    const solutionDocument = new SolutionModel<Solution>({
      taskId: taskDocument.id,
      accountId: account.id,
      code: code,
      unitTestsResults,
    });
    await solutionDocument.save();
    const solution = solutionDocument.toObject();

    res.status(201).json(success({ solution }));
  }
}

export default SolutionsController;
