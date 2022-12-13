"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("custom-env").env(true);
class Database {
    constructor() {
        this.mongoUri = process.env.DB_URI || ""; // TODO
        this.run = async () => {
            // await this.connect();
        };
        this.getStatus = () => {
            return mongoose_1.default.connection.readyState;
        };
        this.getConnection = () => {
            return this.connection;
        };
    }
    async connect() {
        if (this.getStatus() === 1)
            return;
        if (this.getStatus() === 2)
            return;
        mongoose_1.default.Promise = global.Promise;
        try {
            this.connection = await mongoose_1.default.connect(this.mongoUri, {});
            mongoose_1.default.connection.on("error", function (err) {
                console.log(err);
            });
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.default = new Database();
//# sourceMappingURL=index.js.map