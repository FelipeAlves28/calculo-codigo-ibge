"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const CalculeService_1 = require("./usecase/service/CalculeService");
const CalculeController_1 = require("./presentation/controllers/CalculeController");
const DbCalcule_1 = require("./infrastructure/database/DbCalcule");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [CalculeController_1.CalculeController],
        providers: [
            {
                provide: 'CalculeService',
                useClass: CalculeService_1.CalculeService
            },
            {
                provide: 'CalculeRepository',
                useClass: DbCalcule_1.DbCalcule
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map