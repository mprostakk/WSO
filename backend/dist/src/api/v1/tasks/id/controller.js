"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../../common");
class IdController {
    static async get(req, res, next) {
        const { query, params, body } = req;
        const {} = params;
        const {} = body;
        const {} = query;
        const { locals } = res;
        const { taskDocument } = locals;
        const task = taskDocument.toObject();
        res.status(200).json((0, common_1.success)({ task }));
    }
}
__decorate([
    common_1.Controller
], IdController, "get", null);
exports.default = IdController;
//# sourceMappingURL=controller.js.map