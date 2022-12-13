"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = exports.Controller = exports.createValidator = void 0;
const express_validation_1 = require("express-validation");
const joi_1 = __importDefault(require("joi"));
const createValidator = (inputSchema) => {
    const { params, headers, query, cookies, signedCookies, body } = inputSchema;
    return (0, express_validation_1.validate)({
        params: joi_1.default.object(params),
        headers: joi_1.default.object(headers).unknown(),
        query: joi_1.default.object(query),
        cookies: joi_1.default.object(cookies),
        signedCookies: joi_1.default.object(signedCookies),
        body: body ? joi_1.default.object(body) : joi_1.default.any(),
    });
};
exports.createValidator = createValidator;
function Controller(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async (...args) => {
        try {
            await originalMethod.apply(this, args);
        }
        catch (error) {
            const [req, res, next] = args;
            console.error(error);
            next(error);
        }
    };
}
exports.Controller = Controller;
const success = (payload) => {
    return { status: "success", payload };
};
exports.success = success;
//# sourceMappingURL=index.js.map