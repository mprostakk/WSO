"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const common_1 = require("../../../../common");
const all = (0, common_1.createValidator)({
    params: {
        taskId: joi_1.default.string().min(24).max(24).required(),
    },
    body: {},
    query: {},
});
const get = (0, common_1.createValidator)({
    params: {
        taskId: joi_1.default.string().min(24).max(24).required(),
    },
    body: {},
    query: {},
});
exports.default = {
    all,
    get,
};
//# sourceMappingURL=validators.js.map