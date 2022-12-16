import mongoose from "mongoose";

export interface UnitTestResult {
  isPassed: boolean;
  runtime: number;
  usedMemory: number;
  returnCode: number;
  signal: string;
}

export namespace UnitTestResult {
  export interface QueryHelpers {}

  export interface Methods {}

  export interface Virtuals {
    id: string;
  }

  export type Model = mongoose.Model<
    UnitTestResult,
    QueryHelpers,
    Methods,
    Virtuals
  >;

  export type Schema = mongoose.Schema<
    UnitTestResult,
    Model,
    Methods,
    QueryHelpers,
    Virtuals
  >;

  export type Document = mongoose.HydratedDocument<
    UnitTestResult,
    Methods,
    Virtuals
  >;
}
