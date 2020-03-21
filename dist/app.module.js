"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const CalculeIbgeCreatedService_1 = require("./usecase/service/CalculeIbgeCreatedService");
const CalculeIbgeCreatedController_1 = require("./presentation/controllers/CalculeIbgeCreatedController");
const CalculeIbgeCreatedRepository_1 = require("./infrastructure/repository/CalculeIbgeCreatedRepository");
const mongoose_1 = require("@nestjs/mongoose");
const CalculeIbgeSchema_1 = require("./infrastructure/schemas/CalculeIbgeSchema");
const CalculeIbgeFindAllRepository_1 = require("./infrastructure/repository/CalculeIbgeFindAllRepository");
const CalculeIbgeFindAllController_1 = require("./presentation/controllers/CalculeIbgeFindAllController");
const CalculeIbgeFIndAllService_1 = require("./usecase/service/CalculeIbgeFIndAllService");
const CalculeIbgeDeleteRepository_1 = require("./infrastructure/repository/CalculeIbgeDeleteRepository");
const CalculeIbgeDeleteController_1 = require("./presentation/controllers/CalculeIbgeDeleteController");
const CalculeIbgeDeleteService_1 = require("./usecase/service/CalculeIbgeDeleteService");
const CalculeIbgeFindByIdRepository_1 = require("./infrastructure/repository/CalculeIbgeFindByIdRepository");
const CalculeIbgeFindByIdController_1 = require("./presentation/controllers/CalculeIbgeFindByIdController");
const CalculeIbgeFindByIdService_1 = require("./usecase/service/CalculeIbgeFindByIdService");
const CalculeIbgeUpdateRepository_1 = require("./infrastructure/repository/CalculeIbgeUpdateRepository");
const CalculeIbgeUpdateService_1 = require("./usecase/service/CalculeIbgeUpdateService");
const CalculeIbgeUpdateController_1 = require("./presentation/controllers/CalculeIbgeUpdateController");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb+srv://db_user:frm6L8YM3zRU4gCZ@cluster0-u6so4.gcp.mongodb.net/calcule-ibge?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([{ name: 'People', schema: CalculeIbgeSchema_1.CalculeIbgeSchema }])],
        controllers: [CalculeIbgeCreatedController_1.CalculeIbgeCreatedController, CalculeIbgeFindAllController_1.default,
            CalculeIbgeDeleteController_1.default, CalculeIbgeFindByIdController_1.default, CalculeIbgeUpdateController_1.default],
        providers: [
            {
                provide: 'CalculeService',
                useClass: CalculeIbgeCreatedService_1.CalculeIbgeCreatedService
            },
            {
                provide: 'CalculeIbgeCreatedRepository',
                useClass: CalculeIbgeCreatedRepository_1.CalculeIbgeCreatedRepository
            },
            {
                provide: 'CalculeIbgeFindAllRepository',
                useClass: CalculeIbgeFindAllRepository_1.default
            },
            {
                provide: 'CalculeIbgeFindAllService',
                useClass: CalculeIbgeFIndAllService_1.default
            },
            {
                provide: 'CalculeIbgeDeleteRepository',
                useClass: CalculeIbgeDeleteRepository_1.default
            },
            {
                provide: 'CalculeIbgeDeleteService',
                useClass: CalculeIbgeDeleteService_1.default
            },
            {
                provide: 'CalculeIbgeFindByIdRepository',
                useClass: CalculeIbgeFindByIdRepository_1.default
            },
            {
                provide: 'CalculeIbgeFindByIdService',
                useClass: CalculeIbgeFindByIdService_1.default
            },
            {
                provide: 'CalculeIbgeUpdateRepository',
                useClass: CalculeIbgeUpdateRepository_1.default
            },
            {
                provide: 'CalculeIbgeUpdateService',
                useClass: CalculeIbgeUpdateService_1.default
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map