import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CalculeIbgeSchema } from './infrastructure/schemas/CalculeIbgeSchema';
import { CalculeIbgeService } from './usecase/service/CalculeIbgeService';
import { CalculeIbgeController } from './presentation/controllers/CalculeIbgeController';
import { CalculeIbgeRepository } from './infrastructure/repository/CalculeIbgeRepository';
import InfoIbge from './utils/InfoIbge';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://db_user:frm6L8YM3zRU4gCZ@cluster0-u6so4.gcp.mongodb.net/calcule-ibge?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{ name: 'People', schema: CalculeIbgeSchema }]),
  HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [CalculeIbgeController],
  providers: [
    {
      provide: 'CalculeIbgeService',
      useClass: CalculeIbgeService
    },
    {
      provide: 'CalculeIbgeRepository',
      useClass: CalculeIbgeRepository
    },
    {
      provide: 'InfoIbge',
      useClass: InfoIbge
    }
  ],
})
export class AppModule { }

