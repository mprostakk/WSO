"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const middlewares_1 = __importDefault(require("./middlewares"));
const solutions_1 = __importDefault(require("./solutions"));
const validators_1 = __importDefault(require("./validators"));
const idRouter = express_1.default.Router({ mergeParams: true });
idRouter.all("*", validators_1.default.all);
idRouter.use(middlewares_1.default.withTask);
idRouter.use("/solutions", solutions_1.default);
idRouter.get("/", validators_1.default.get, controller_1.default.get);
exports.default = idRouter;
//# sourceMappingURL=index.js.map