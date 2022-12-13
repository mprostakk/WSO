import mongoose from "mongoose";
import { UnitTestResult } from "./UnitTestResult/index.types";

export interface Solution {
  taskId: string;
  accountId: string;
  code: string;
  unitTestsResults: UnitTestResult[];
}

export namespace Solution {
  export interface QueryHelpers {}

  export interface Methods {}

  export interface Virtuals {
    id: string;
  }

  export type Model = mongoose.Model<Solution, QueryHelpers, Methods, Virtuals>;

  export type Schema = mongoose.Schema<
    Solution,
    Model,
    Methods,
    QueryHelpers,
    Virtuals
  >;

  export type Document = mongoose.HydratedDocument<Solution, Methods, Virtuals>;
}
