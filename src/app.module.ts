import { Module } from '@nestjs/common';
import { CalculeService } from './usecase/service/CalculeService';
import { CalculeController } from './presentation/controllers/CalculeController';
import { DbCalcule } from './infrastructure/database/DbCalcule';

@Module({
  imports: [],
  controllers: [CalculeController],
  providers: [
    {
      provide: 'CalculeService',
      useClass: CalculeService
    },
    {
      provide: 'CalculeRepository',
      useClass: DbCalcule
    }
  ],
})
export class AppModule { }  

