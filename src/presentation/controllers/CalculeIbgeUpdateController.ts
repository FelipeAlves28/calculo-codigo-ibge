import { Controller, Inject, Put, Param, Body } from "@nestjs/common";
import ICalculeIbgeUpdate from "src/usecase/service/interface/ICalculeIbgeUpdate";
import People from "src/domain/model/People";

@Controller('update')
export default class CalculeIbgeUpdateController {
    constructor(@Inject('CalculeIbgeUpdateService') private readonly service: ICalculeIbgeUpdate) { }

    @Put(":id")
    async update(@Param("id") id: string, @Body() payload: People) {
        return await this.service.execute(id, payload);
    }
}