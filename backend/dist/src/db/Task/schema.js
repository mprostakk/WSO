"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = __importDefault(require("./UnitTest/schema"));
const TaskSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    language: { type: String, required: true },
    unitTests: { type: [schema_1.default], required: true },
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });
TaskSchema.virtual("id").get(function () {
    return this._id.toHexString();
});
exports.default = TaskSchema;
//# sourceMappingURL=schema.js.map