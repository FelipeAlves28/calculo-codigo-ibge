import { Module } from '@nestjs/common';
import { CalculeIbgeCreatedService } from './usecase/service/CalculeIbgeCreatedService';
import  {CalculeIbgeCreatedController }  from './presentation/controllers/CalculeIbgeCreatedController';
import { CalculeIbgeCreatedRepository } from './infrastructure/repository/CalculeIbgeCreatedRepository';
import { MongooseModule } from '@nestjs/mongoose';
import { CalculeIbgeSchema } from './infrastructure/schemas/CalculeIbgeSchema';
import CalculeIbgeFindAllRepository from './infrastructure/repository/CalculeIbgeFindAllRepository';
import CalculeIbgeFindAllController from './presentation/controllers/CalculeIbgeFindAllController';
import CalculeIbgeFindAllService from './usecase/service/CalculeIbgeFIndAllService';
import CalculeIbgeDeleteRepository from './infrastructure/repository/CalculeIbgeDeleteRepository';
import CalculeIbgeDeleteController from './presentation/controllers/CalculeIbgeDeleteController';
import CalculeIbgeDeleteService from './usecase/service/CalculeIbgeDeleteService';
import CalculeIbgeFindByIdRepository from './infrastructure/repository/CalculeIbgeFindByIdRepository';
import CalculeIbgeFindByIdController from './presentation/controllers/CalculeIbgeFindByIdController';
import CalculeIbgeFindByIdService from './usecase/service/CalculeIbgeFindByIdService';
import CalculeIbgeUpdateRepository from './infrastructure/repository/CalculeIbgeUpdateRepository';
import CalculeIbgeUpdateService from './usecase/service/CalculeIbgeUpdateService';
import CalculeIbgeUpdateController from './presentation/controllers/CalculeIbgeUpdateController';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://db_user:frm6L8YM3zRU4gCZ@cluster0-u6so4.gcp.mongodb.net/calcule-ibge?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{ name: 'People', schema: CalculeIbgeSchema }])],
  controllers: [CalculeIbgeCreatedController, CalculeIbgeFindAllController, 
    CalculeIbgeDeleteController,CalculeIbgeFindByIdController, CalculeIbgeUpdateController],
  providers: [
    {
      provide: 'CalculeService',
      useClass: CalculeIbgeCreatedService
    },
    {
      provide: 'CalculeIbgeCreatedRepository',
      useClass: CalculeIbgeCreatedRepository
    },
    {
      provide: 'CalculeIbgeFindAllRepository',
      useClass: CalculeIbgeFindAllRepository
    },
    {
      provide: 'CalculeIbgeFindAllService',
      useClass: CalculeIbgeFindAllService
    },
    {
      provide: 'CalculeIbgeDeleteRepository',
      useClass: CalculeIbgeDeleteRepository
    },
    {
      provide: 'CalculeIbgeDeleteService',
      useClass: CalculeIbgeDeleteService
    },
    {
      provide: 'CalculeIbgeFindByIdRepository',
      useClass: CalculeIbgeFindByIdRepository
    },
    {
      provide: 'CalculeIbgeFindByIdService',
      useClass: CalculeIbgeFindByIdService
    },
    {
      provide: 'CalculeIbgeUpdateRepository',
      useClass: CalculeIbgeUpdateRepository
    },
    {
      provide: 'CalculeIbgeUpdateService',
      useClass: CalculeIbgeUpdateService
    }
  ],
})
export class AppModule { }

