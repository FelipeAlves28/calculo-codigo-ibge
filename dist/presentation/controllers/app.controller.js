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
const IDbCalcule_1 = require("../../infrastructure/repository/port/IDbCalcule");
const ICalcule_1 = require("../../usecase/service/ICalcule");
const People_1 = require("../../domain/model/People");
let AppController = class AppController {
    constructor(calculator) {
        this.calculator = calculator;
    }
    async execute(cpf, codigoIbge) {
        return await this.calculator.calcule(cpf, codigoIbge);
    }
};
__decorate([
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [People_1.default, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "execute", null);
AppController = __decorate([
    common_1.Controller(),
    __param(0, common_1.Inject('CalculeService')),
    __metadata("design:paramtypes", [Object])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map