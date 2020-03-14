import ICalcule from 'src/usecase/service/ICalcule';
import People from 'src/domain/model/People';
export declare class AppController {
    private readonly calculator;
    constructor(calculator: ICalcule);
    execute(cpf: People, codigoIbge: Number): Promise<any>;
}
