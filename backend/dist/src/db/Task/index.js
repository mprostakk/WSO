"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
require("./hooks");
const TaskModel = mongoose_1.default.model("tasks", schema_1.default);
exports.default = TaskModel;
//# sourceMappingURL=index.js.map