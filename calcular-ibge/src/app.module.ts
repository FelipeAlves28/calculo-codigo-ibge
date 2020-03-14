import { Module } from '@nestjs/common';
import { CalculeService } from './usecase/service/CalculeService';
import { CalculeController } from './presentation/controllers/CalculeController';

@Module({
  imports: [],
  controllers: [CalculeController],
  providers: [
    {
      provide: 'CalculeService',
      useClass: CalculeService
    },
  ],
})
export class AppModule { }  

