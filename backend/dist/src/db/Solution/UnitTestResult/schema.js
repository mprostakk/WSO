"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UnitTestResultSchema = new mongoose_1.default.Schema({
    isPassed: { type: Boolean, required: true },
    runtime: { type: Number, required: true },
    usedMemory: { type: Number, required: true },
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });
UnitTestResultSchema.virtual("id").get(function () {
    return this._id.toHexString();
});
exports.default = UnitTestResultSchema;
//# sourceMappingURL=schema.js.map