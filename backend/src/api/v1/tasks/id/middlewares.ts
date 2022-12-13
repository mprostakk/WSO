import Express from "express";
import TaskModel from "../../../../db/Task";
import { Id } from "./index.types";

const withTask = async (
  req: Id["request"],
  res: Id["response"],
  next: Express.NextFunction
) => {
  try {
    const { query, params, body } = req;
    const { taskId } = params;
    const {} = body;
    const {} = query;
    const task = await TaskModel.findById(taskId);
    if (!task) throw new Error(`Not found task by id: '${taskId}'`);
    res.locals = { ...res.locals, task };
    next();
  } catch (error) {
    next(error);
  }
};

export default {
  withTask,
};
