"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UnitTestSchema = new mongoose_1.default.Schema({
    stdin: { type: String, required: true },
    stdout: { type: String, required: true },
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });
UnitTestSchema.virtual("id").get(function () {
    return this._id.toHexString();
});
exports.default = UnitTestSchema;
//# sourceMappingURL=schema.js.map