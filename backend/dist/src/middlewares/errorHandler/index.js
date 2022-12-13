"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = async (err, req, res, next) => {
    const error = err.message || "Unknown Error";
    return res.status(500).json({ status: "error", error: error.message });
};
exports.default = errorHandler;
//# sourceMappingURL=index.js.map