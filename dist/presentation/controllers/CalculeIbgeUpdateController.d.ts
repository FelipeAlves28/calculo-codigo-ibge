import ICalculeIbgeUpdate from "src/usecase/service/interface/ICalculeIbgeUpdate";
import People from "src/domain/model/People";
export default class CalculeIbgeUpdateController {
    private readonly service;
    constructor(service: ICalculeIbgeUpdate);
    update(id: string, payload: People): Promise<any>;
}
