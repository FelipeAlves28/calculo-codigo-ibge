import { Inject } from "@nestjs/common";
import IDbCalculeFindAll from "src/infrastructure/repository/interface/IDbCalculeIbgeFindAll";
import ICalculeFindAll from "./interface/ICalculeIbgeFindAll";

export default class CalculeIbgeFindAllService implements ICalculeFindAll{
    constructor(@Inject('CalculeIbgeFindAllRepository') private readonly repository:IDbCalculeFindAll){}
    
    async execute(): Promise<any> {
       return await this.repository.findAll();
    }
}