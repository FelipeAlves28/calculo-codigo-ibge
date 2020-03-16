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
const roit_response_handler_1 = require("@roit/roit-response-handler");
const ICalcule_1 = require("../../usecase/service/ICalcule");
let CalculeController = class CalculeController {
    constructor(calculator) {
        this.calculator = calculator;
    }
    async calcule(body) {
        console.log(body);
        let response = await this.calculator.execute(body);
        return roit_response_handler_1.OkResponse(response, 'Success !');
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalculeController.prototype, "calcule", null);
CalculeController = __decorate([
    common_1.Controller(),
    __param(0, common_1.Inject('CalculeService')),
    __metadata("design:paramtypes", [Object])
], CalculeController);
exports.CalculeController = CalculeController;
//# sourceMappingURL=CalculeController.js.map