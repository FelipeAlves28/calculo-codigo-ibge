import IDbCalculeFindById from "./interface/IDbCalculeIbgeFindById";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import People from "src/domain/model/People";

export default class CalculeFindByIdRepository implements IDbCalculeFindById {
    constructor(@InjectModel('People') private readonly model: Model<People>) { }

    async findById(id: string): Promise<any> {
        return await this.model.findById(id).exec();
    }
}