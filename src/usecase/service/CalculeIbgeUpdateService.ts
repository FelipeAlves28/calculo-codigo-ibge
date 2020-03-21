import ICalculeIbgeUpdate from "./interface/ICalculeIbgeUpdate";
import { Inject } from "@nestjs/common";
import IDbCalculeUpdate from "src/infrastructure/repository/interface/IDbCalculeUpdate";
import People from "src/domain/model/People";

export default class CalculeIbgeUpdateService implements ICalculeIbgeUpdate {
    constructor(@Inject('CalculeIbgeUpdateRepository') private readonly repository: IDbCalculeUpdate) { }

    async execute(id: string, payload: People): Promise<any> {
        return await this.repository.update(id, payload);
    }
}