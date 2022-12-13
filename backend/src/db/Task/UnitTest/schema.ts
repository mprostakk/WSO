import mongoose from "mongoose";
import { UnitTest } from "./index.types";

const UnitTestSchema: UnitTest.Schema = new mongoose.Schema(
  {
    stdin: { type: String, required: true },
    stdout: { type: String, required: true },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UnitTestSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

export default UnitTestSchema;
