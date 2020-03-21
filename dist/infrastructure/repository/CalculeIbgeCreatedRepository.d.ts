import IDbCalculeCreated from "./interface/IDbCalculeCreated";
import People from "src/domain/model/People";
import { Model } from "mongoose";
export declare class CalculeIbgeCreatedRepository implements IDbCalculeCreated {
    private readonly repository;
    constructor(repository: Model<People>);
    create(people: People): Promise<any>;
}
