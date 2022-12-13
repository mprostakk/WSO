"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const withAccount = async (req, res, next) => {
    try {
        const { query, params, body, headers } = req;
        const { authorization } = headers;
        const {} = params;
        const {} = body;
        const {} = query;
        if (!authorization)
            throw new Error(`Authorization failed`);
        const account = { id: authorization };
        res.locals = { ...res.locals, account };
    }
    catch (error) {
        next(error);
    }
};
exports.default = withAccount;
//# sourceMappingURL=index.js.map