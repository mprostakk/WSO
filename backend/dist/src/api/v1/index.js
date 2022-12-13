"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const withAccount_1 = __importDefault(require("../../middlewares/withAccount"));
const tasks_1 = __importDefault(require("./tasks"));
const validators_1 = __importDefault(require("./validators"));
const v1Router = express_1.default.Router({});
v1Router.all("*", validators_1.default.all);
v1Router.use(withAccount_1.default);
v1Router.use("/tasks", tasks_1.default);
exports.default = v1Router;
//# sourceMappingURL=index.js.map