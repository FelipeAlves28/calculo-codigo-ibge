import { Controller, Inject, Post, Body } from '@nestjs/common';
import People from 'src/domain/model/People';
import { OkResponse, ErrorResponse } from "@roit/roit-response-handler"
import IPeople from 'src/usecase/service/IPeople';

@Controller()
export class CalculeController {
 
  constructor(
    @Inject('CalculeService') private readonly calculator: IPeople ) { }

    @Post()
    async calcule(@Body() body: any){
      console.log(body);
      
      let response = await this.calculator.create(body);
      return OkResponse(response, 'Success !');
    }
  
}
