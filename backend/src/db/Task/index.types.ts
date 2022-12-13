import mongoose from "mongoose";
import { UnitTest } from "./UnitTest/index.types";

export interface Task {
  name: string;
  description: string;
  language: string;
  unitTests: UnitTest[];
}

export namespace Task {
  export interface QueryHelpers {}

  export interface Methods {}

  export interface Virtuals {
    id: string;
  }

  export type Model = mongoose.Model<Task, QueryHelpers, Methods, Virtuals>;

  export type Schema = mongoose.Schema<
    Task,
    Model,
    Methods,
    QueryHelpers,
    Virtuals
  >;

  export type Document = mongoose.HydratedDocument<Task, Methods, Virtuals>;
}
