import mongoose from "mongoose";
import { Task } from "./index.types";
import UnitTestSchema from "./UnitTest/schema";

const TaskSchema: Task.Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    language: { type: String, required: true },
    unitTests: { type: [UnitTestSchema], required: true },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

TaskSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

export default TaskSchema;
