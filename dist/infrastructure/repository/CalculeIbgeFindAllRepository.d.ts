import IDbCalculeFindAll from "./interface/IDbCalculeIbgeFindAll";
import { Model } from "mongoose";
import People from "src/domain/model/People";
export default class CalculeIbgeFindAllRepository implements IDbCalculeFindAll {
    private peopleModel;
    constructor(peopleModel: Model<People>);
    findAll(): Promise<any>;
}
