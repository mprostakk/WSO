"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../../../common");
const Solution_1 = __importDefault(require("../../../../../db/Solution"));
class SolutionsController {
    static async post(req, res, next) {
        const { query, params, body } = req;
        const {} = params;
        const { stdin } = body;
        const {} = query;
        const { locals } = res;
        const { taskDocument, account } = locals;
        // TODO
        const solutionDocument = new Solution_1.default({}); // TODO
        await solutionDocument.save();
        const solution = solutionDocument.toObject();
        res.status(201).json((0, common_1.success)({ solution }));
    }
}
__decorate([
    common_1.Controller
], SolutionsController, "post", null);
exports.default = SolutionsController;
//# sourceMappingURL=controller.js.map