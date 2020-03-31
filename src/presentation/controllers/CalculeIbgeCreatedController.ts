import { Controller, Inject, Post, Body } from '@nestjs/common';
import ICalculeIbgeCreated from 'src/usecase/service/interface/ICalculeIbgeCreated';

@Controller('created')
export default class CalculeIbgeCreatedController {

  constructor(
    @Inject('CalculeService') private readonly service: ICalculeIbgeCreated) { }

  @Post()
  async calcule(@Body() payload: any) {

    return await this.service.execute(payload);
  }

}
