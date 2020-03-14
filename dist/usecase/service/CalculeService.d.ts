import People from 'src/domain/model/People';
import IPeople from './IPeople';
import IDbCalcule from 'src/infrastructure/database/IDbCalcule';
export declare class CalculeService implements IDbCalcule {
    private readonly repository;
    constructor(repository: IPeople);
    create(people: People): Promise<any>;
}
