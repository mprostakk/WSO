"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = __importDefault(require("./UnitTestResult/schema"));
const SolutionSchema = new mongoose_1.default.Schema({
    taskId: { type: String, required: true },
    accountId: { type: String, required: true },
    stdin: { type: String, required: true },
    unitTestsResults: { type: [schema_1.default], required: true },
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });
SolutionSchema.virtual("id").get(function () {
    return this._id.toHexString();
});
exports.default = SolutionSchema;
//# sourceMappingURL=schema.js.map