import { Controller, Inject, Post, Body } from '@nestjs/common';
import { OkResponse, ErrorResponse } from "@roit/roit-response-handler";
import ICalculeIbgeCreated from 'src/usecase/service/interface/ICalculeIbgeCreated';

@Controller('rules')
export class CalculeIbgeCreatedController {
 
  constructor(
    @Inject('CalculeService') private readonly service: ICalculeIbgeCreated ) { }

    @Post()
    async calcule(@Body() body: any){

      let response = await this.service.execute(body);
      return OkResponse(response, 'Success !');
    }
  
}
