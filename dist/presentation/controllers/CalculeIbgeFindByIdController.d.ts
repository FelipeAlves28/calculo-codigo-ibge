import ICalculeIbgeFindById from "src/usecase/service/interface/ICalculeIbgeFindById";
export default class CalculeIbgeFindByIdController {
    private readonly service;
    constructor(service: ICalculeIbgeFindById);
    findById(id: string): Promise<any>;
}
