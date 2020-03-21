import { Inject, Get, Controller } from "@nestjs/common";
import ICalculeFindAll from "src/usecase/service/interface/ICalculeIbgeFindAll";

@Controller('findAll')
export default class CalculeIbgeFindAllController{
    constructor(@Inject('CalculeIbgeFindAllService') private readonly service : ICalculeFindAll){}

    @Get()
    async findAll(){
        return await this.service.execute();
    }
}