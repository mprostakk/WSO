import Express from "express";
import TaskModel from "../../../../db/Task";
import { Id } from "./index.types";

const withTask = async (
  req: Id["request"],
  res: Id["response"],
  next: Express.NextFunction
) => {
  try {
    const { query, params } = req;
    const { taskId } = params;
    const {} = query;
    const taskDocument = await TaskModel.findById(taskId);
    if (!taskDocument) throw new Error(`Not found task by id: '${taskId}'`);
    res.locals = { ...res.locals, taskDocument };
    next();
  } catch (error) {
    next(error);
  }
};

export default {
  withTask,
};
