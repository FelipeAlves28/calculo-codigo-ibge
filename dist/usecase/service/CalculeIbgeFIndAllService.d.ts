import IDbCalculeFindAll from "src/infrastructure/repository/interface/IDbCalculeIbgeFindAll";
import ICalculeFindAll from "./interface/ICalculeIbgeFindAll";
export default class CalculeIbgeFindAllService implements ICalculeFindAll {
    private readonly repository;
    constructor(repository: IDbCalculeFindAll);
    execute(): Promise<any>;
}
