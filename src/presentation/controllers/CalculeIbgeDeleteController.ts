import { Inject, Delete, Controller, Param , Req} from "@nestjs/common";
import ICalculeIbgeDelete from "src/usecase/service/interface/ICalculeIbgeDelete";

@Controller('delete')
export default class CalculeIbgeDeleteController{
    constructor(@Inject('CalculeIbgeDeleteService') private service: ICalculeIbgeDelete){}

    @Delete(':id')
    async delete(@Param('id') id:string){
        return await this.service.execute(id);
    }
}