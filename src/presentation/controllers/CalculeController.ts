import { Controller, Inject, Post, Body } from '@nestjs/common';
import { OkResponse, ErrorResponse } from "@roit/roit-response-handler";
import ICalcule from 'src/usecase/service/ICalcule';

@Controller()
export class CalculeController {
 
  constructor(
    @Inject('CalculeService') private readonly calculator: ICalcule ) { }

    @Post()
    async calcule(@Body() body: any){
      console.log(body);
      
      let response = await this.calculator.execute(body);
      return OkResponse(response, 'Success !');
    }
  
}
