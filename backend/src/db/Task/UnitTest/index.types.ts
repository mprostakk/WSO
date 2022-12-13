import mongoose from "mongoose";

export interface UnitTest {
  stdin: string;
  stdout: string;
}

export namespace UnitTest {
  export interface QueryHelpers {}

  export interface Methods {}

  export interface Virtuals {
    id: string;
  }

  export type Model = mongoose.Model<UnitTest, QueryHelpers, Methods, Virtuals>;

  export type Schema = mongoose.Schema<
    UnitTest,
    Model,
    Methods,
    QueryHelpers,
    Virtuals
  >;

  export type Document = mongoose.HydratedDocument<UnitTest, Methods, Virtuals>;
}
