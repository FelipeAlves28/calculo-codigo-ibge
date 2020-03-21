import IDbCalculeFindById from "./interface/IDbCalculeIbgeFindById";
import { Model } from "mongoose";
import People from "src/domain/model/People";
export default class CalculeFindByIdRepository implements IDbCalculeFindById {
    private readonly model;
    constructor(model: Model<People>);
    findById(id: string): Promise<any>;
}
