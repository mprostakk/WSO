import mongoose from "mongoose";
import TaskSchema from "./schema";
import "./hooks";
import { Task } from "./index.types";

const TaskModel: Task.Model = mongoose.model("tasks", TaskSchema);

export default TaskModel;
