import IDbCalculeIbgeDelete from "./interface/IDbCalculeIbgeDelete";
import { Model } from "mongoose";
import People from "src/domain/model/People";
export default class CalculeIbgeDeleteRepository implements IDbCalculeIbgeDelete {
    private readonly model;
    constructor(model: Model<People>);
    delete(id: string): Promise<any>;
}
