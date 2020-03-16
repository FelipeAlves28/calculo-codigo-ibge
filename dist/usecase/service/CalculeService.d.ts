import People from 'src/domain/model/People';
import IPeople from './ICalcule';
import IDbCalcule from 'src/infrastructure/database/IDbCalcule';
export declare class CalculeService implements IPeople {
    private readonly repository;
    constructor(repository: IDbCalcule);
    execute(people: People): Promise<any>;
}
