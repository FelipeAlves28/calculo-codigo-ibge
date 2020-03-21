"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const ICalculeIbgeCreated_1 = require("../../usecase/service/interface/ICalculeIbgeCreated");
let CalculeIbgeCreatedController = class CalculeIbgeCreatedController {
    constructor(service) {
        this.service = service;
    }
    async calcule(body) {
        return await this.service.execute(body);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalculeIbgeCreatedController.prototype, "calcule", null);
CalculeIbgeCreatedController = __decorate([
    common_1.Controller('created'),
    __param(0, common_1.Inject('CalculeService')),
    __metadata("design:paramtypes", [Object])
], CalculeIbgeCreatedController);
exports.CalculeIbgeCreatedController = CalculeIbgeCreatedController;
//# sourceMappingURL=CalculeIbgeCreatedController.js.map