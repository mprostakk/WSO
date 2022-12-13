"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("../../../../db/Task"));
const withTask = async (req, res, next) => {
    try {
        const { query, params, body } = req;
        const { taskId } = params;
        const {} = body;
        const {} = query;
        const taskDocument = await Task_1.default.findById(taskId);
        if (!taskDocument)
            throw new Error(`Not found task by id: '${taskId}'`);
        res.locals = { ...res.locals, taskDocument };
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = {
    withTask,
};
//# sourceMappingURL=middlewares.js.map