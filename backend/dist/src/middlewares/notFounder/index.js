"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFounder = async (err, req, res, next) => {
    next(new Error(`Not found`));
};
exports.default = notFounder;
//# sourceMappingURL=index.js.map