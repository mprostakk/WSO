"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = __importDefault(require("../middlewares/errorHandler"));
const notFounder_1 = __importDefault(require("../middlewares/notFounder"));
const v1_1 = __importDefault(require("./v1"));
const apiRouter = express_1.default.Router({});
apiRouter.use("/v1", v1_1.default);
apiRouter.all("*", notFounder_1.default);
apiRouter.use(errorHandler_1.default);
exports.default = apiRouter;
//# sourceMappingURL=index.js.map