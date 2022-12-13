import mongoose from "mongoose";
import { Solution } from "./index.types";
import UnitTestResultSchema from "./UnitTestResult/schema";

const SolutionSchema: Solution.Schema = new mongoose.Schema(
  {
    taskId: { type: String, required: true },
    accountId: { type: String, required: true },
    stdin: { type: String, required: true },
    unitTestsResults: { type: [UnitTestResultSchema], required: true },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

SolutionSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

export default SolutionSchema;
