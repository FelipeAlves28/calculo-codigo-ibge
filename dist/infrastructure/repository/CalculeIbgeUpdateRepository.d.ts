import IDbCalculeUpdate from "./interface/IDbCalculeUpdate";
import { Model } from "mongoose";
import People from "src/domain/model/People";
export default class CalculeIbgeUpdateRepository implements IDbCalculeUpdate {
    private model;
    constructor(model: Model<People>);
    update(id: string, payload: People): Promise<any>;
}
