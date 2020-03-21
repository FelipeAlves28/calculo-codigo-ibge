import ICalculeIbgeDelete from "./interface/ICalculeIbgeDelete";
import { Inject } from "@nestjs/common";
import IDbCalculeIbgeDelete from "src/infrastructure/repository/interface/IDbCalculeIbgeDelete";

export default class CalculeIbgeDeleteService implements ICalculeIbgeDelete {
    constructor(@Inject('CalculeIbgeDeleteRepository') private readonly repository: IDbCalculeIbgeDelete) { }

    async execute(id: string): Promise<any> {
        return await this.repository.delete(id);
    }
}