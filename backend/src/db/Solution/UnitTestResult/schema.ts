import mongoose from "mongoose";
import { UnitTestResult } from "./index.types";

const UnitTestResultSchema: UnitTestResult.Schema = new mongoose.Schema(
  {
    isPassed: { type: Boolean, required: true },
    runtime: { type: Number, required: true },
    usedMemory: { type: Number, required: true },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UnitTestResultSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

export default UnitTestResultSchema;
