import ICalculeIbgeUpdate from "./interface/ICalculeIbgeUpdate";
import IDbCalculeUpdate from "src/infrastructure/repository/interface/IDbCalculeUpdate";
import People from "src/domain/model/People";
export default class CalculeIbgeUpdateService implements ICalculeIbgeUpdate {
    private readonly repository;
    constructor(repository: IDbCalculeUpdate);
    execute(id: string, payload: People): Promise<any>;
}
