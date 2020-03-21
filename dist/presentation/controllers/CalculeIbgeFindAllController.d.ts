import ICalculeFindAll from "src/usecase/service/interface/ICalculeIbgeFindAll";
export default class CalculeIbgeFindAllController {
    private readonly service;
    constructor(service: ICalculeFindAll);
    findAll(): Promise<any>;
}
