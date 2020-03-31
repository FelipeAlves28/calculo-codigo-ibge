import { Inject, Get, Param, Controller } from "@nestjs/common";
import ICalculeIbgeFindById from "src/usecase/service/interface/ICalculeIbgeFindById";

@Controller('find_by_id')
export default class CalculeIbgeFindByIdController {
    constructor(@Inject('CalculeIbgeFindByIdService') private readonly service: ICalculeIbgeFindById) { }

    @Get(":id")
    async findById(@Param('id') id: string) {
        return await this.service.execute(id);
    }
}