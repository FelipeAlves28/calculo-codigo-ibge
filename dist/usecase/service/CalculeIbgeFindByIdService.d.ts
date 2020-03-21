import ICalculeIbgeFindById from "./interface/ICalculeIbgeFindById";
import IDbCalculeFindById from "src/infrastructure/repository/interface/IDbCalculeIbgeFindById";
export default class CalculeIbgeFindByIdService implements ICalculeIbgeFindById {
    private readonly repository;
    constructor(repository: IDbCalculeFindById);
    execute(id: string): Promise<any>;
}
