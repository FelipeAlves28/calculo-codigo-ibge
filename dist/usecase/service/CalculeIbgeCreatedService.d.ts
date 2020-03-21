import People from 'src/domain/model/People';
import IDbCalculeCreated from 'src/infrastructure/repository/interface/IDbCalculeCreated';
import ICalculeIbgeCreated from './interface/ICalculeIbgeCreated';
export declare class CalculeIbgeCreatedService implements ICalculeIbgeCreated {
    private readonly repository;
    constructor(repository: IDbCalculeCreated);
    execute(people: People): Promise<any>;
}
