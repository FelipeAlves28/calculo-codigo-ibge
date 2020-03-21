import ICalculeIbgeDelete from "./interface/ICalculeIbgeDelete";
import IDbCalculeIbgeDelete from "src/infrastructure/repository/interface/IDbCalculeIbgeDelete";
export default class CalculeIbgeDeleteService implements ICalculeIbgeDelete {
    private readonly repository;
    constructor(repository: IDbCalculeIbgeDelete);
    execute(id: string): Promise<any>;
}
