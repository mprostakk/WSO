"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const validators_1 = __importDefault(require("./validators"));
const solutionsRouter = express_1.default.Router({ mergeParams: true });
solutionsRouter.all("*", validators_1.default.all);
solutionsRouter.post("/", validators_1.default.post, controller_1.default.post);
exports.default = solutionsRouter;
//# sourceMappingURL=index.js.map