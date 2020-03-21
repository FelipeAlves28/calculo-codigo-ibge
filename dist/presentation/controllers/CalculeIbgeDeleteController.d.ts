import ICalculeIbgeDelete from "src/usecase/service/interface/ICalculeIbgeDelete";
export default class CalculeIbgeDeleteController {
    private service;
    constructor(service: ICalculeIbgeDelete);
    delete(id: string): Promise<any>;
}
