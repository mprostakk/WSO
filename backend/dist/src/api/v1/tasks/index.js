"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const id_1 = __importDefault(require("./id"));
const validators_1 = __importDefault(require("./validators"));
const tasksRouter = express_1.default.Router({});
tasksRouter.all("*", validators_1.default.all);
tasksRouter.use("/id/:taskId", id_1.default);
tasksRouter.get("/", validators_1.default.get, controller_1.default.get);
exports.default = tasksRouter;
//# sourceMappingURL=index.js.map