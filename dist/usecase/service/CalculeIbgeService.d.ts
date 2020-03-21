import People from 'src/domain/model/People';
import IPeople from './interface/ICalculeIbgeCreated';
import IDbCalculeCreated from 'src/infrastructure/repository/interface/IDbCalculeCreated';
export declare class CalculeIbgeService implements IPeople {
    private readonly repository;
    constructor(repository: IDbCalculeCreated);
    execute(people: People): Promise<any>;
}
