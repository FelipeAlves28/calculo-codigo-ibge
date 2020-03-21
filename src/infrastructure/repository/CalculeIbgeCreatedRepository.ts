import IDbCalculeCreated from "./interface/IDbCalculeCreated";
import People from "src/domain/model/People";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export class CalculeIbgeCreatedRepository implements IDbCalculeCreated {
    constructor(@InjectModel('People') private readonly repository: Model<People>) { }

    async create(people: People): Promise<any> {

        const createdPeople = new this.repository(people);
        return await createdPeople.save();
    }

}