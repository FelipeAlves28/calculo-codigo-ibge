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
const ICalculeIbgeFindAll_1 = require("../../usecase/service/interface/ICalculeIbgeFindAll");
let CalculeIbgeFindAllController = class CalculeIbgeFindAllController {
    constructor(service) {
        this.service = service;
    }
    async findAll() {
        return await this.service.execute();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CalculeIbgeFindAllController.prototype, "findAll", null);
CalculeIbgeFindAllController = __decorate([
    common_1.Controller('findAll'),
    __param(0, common_1.Inject('CalculeIbgeFindAllService')),
    __metadata("design:paramtypes", [Object])
], CalculeIbgeFindAllController);
exports.default = CalculeIbgeFindAllController;
//# sourceMappingURL=CalculeIbgeFindAllController.js.map