"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
require("./hooks");
const SolutionModel = mongoose_1.default.model("solutions", schema_1.default);
exports.default = SolutionModel;
//# sourceMappingURL=index.js.map