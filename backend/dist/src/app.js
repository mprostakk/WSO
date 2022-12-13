"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./api"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const port = 3000;
db_1.default.run();
app.use("/api", api_1.default);
app.get("/healthcheck", (req, res, next) => {
    res.status(200).json({ status: "success", payload: {} });
});
app.get("/run", async (req, res) => {
    const data = {
        language: "python",
        version: "3.9.4",
        files: [
            {
                name: "run.py",
                content: 'print("Hello world")',
            },
        ],
        stdin: "",
        args: [],
        compile_timeout: 10000,
        run_timeout: 3000,
        compile_memory_limit: -1,
        run_memory_limit: -1,
    };
    const response = await axios_1.default.post("http://piston:2000/api/v2/execute", data);
    res.status(200).json({ status: "success", pistonResponse: response.data });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map