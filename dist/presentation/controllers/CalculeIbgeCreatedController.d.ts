import ICalculeIbgeCreated from 'src/usecase/service/interface/ICalculeIbgeCreated';
export declare class CalculeIbgeCreatedController {
    private readonly service;
    constructor(service: ICalculeIbgeCreated);
    calcule(body: any): Promise<any>;
}
