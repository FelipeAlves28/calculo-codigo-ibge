import ICalculeIbgeCreated from 'src/usecase/service/interface/ICalculeIbgeCreated';
export declare class CalculeIbgeController {
    private readonly service;
    constructor(service: ICalculeIbgeCreated);
    calcule(body: any): Promise<import("@roit/roit-response-handler/src/ResponseModel").ResponseModel>;
}