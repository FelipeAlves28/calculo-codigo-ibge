import ICalculeIbgeFindById from "./interface/ICalculeIbgeFindById";
import { Inject } from "@nestjs/common";
import IDbCalculeFindById from "src/infrastructure/repository/interface/IDbCalculeIbgeFindById";

export default class CalculeIbgeFindByIdService implements ICalculeIbgeFindById {
    constructor(@Inject('CalculeIbgeFindByIdRepository') private readonly repository: IDbCalculeFindById) { }

    async execute(id: string): Promise<any> {
        return await this.repository.findById(id);
    }
}