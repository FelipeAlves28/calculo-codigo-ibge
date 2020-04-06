import { Controller, Inject, Post, Body, Put, Param, Get, Delete } from '@nestjs/common';
import ICalculeIbge from 'src/usecase/service/interface/ICalculeIbge';
import People from 'src/domain/model/People';

@Controller('peoples')
export class CalculeIbgeController {

  constructor(
    @Inject('CalculeIbgeService') private readonly service: ICalculeIbge) { }

  @Post()
  async calcule(@Body() payload: any) {
    return await this.service.executeCreate(payload);
  }
  @Put(":id")
  async update(@Param("id") id: string, @Body() payload: People) {
    return await this.service.executeUpdate(id, payload);
  }
  @Get(":id")
  async findById(@Param('id') id: string) {
    return await this.service.executeFindById(id);
  }
  @Get()
  async findAll() {
    return await this.service.executeFindAll();
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.executeDelete(id);
  }

}
