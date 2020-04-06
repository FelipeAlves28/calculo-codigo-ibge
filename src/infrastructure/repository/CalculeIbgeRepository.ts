import IDbCalculeIbge from "./interface/IDbCalculeIbge";
import People from "src/domain/model/People";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
export class CalculeIbgeRepository implements IDbCalculeIbge {
    constructor(@InjectModel('People') private readonly repository: Model<People>) { }

    async create(people: People): Promise<any> {
        const createdPeople = new this.repository(people);
        return await createdPeople.save();
    }
    async delete(id: string): Promise<any> {
        return await this.repository.deleteOne({ _id: id }).exec()
    }
    async findAll(): Promise<any> {
        return await this.repository.find().exec();
    }
    async findById(id: string): Promise<any> {
        return await this.repository.findById(id).exec();
    }
    async update(id: string, payload: People): Promise<any> {
        return await this.repository.updateOne({ _id: id }, payload).exec();

    }



}