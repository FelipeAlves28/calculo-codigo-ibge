import IDbCalculeUpdate from "./interface/IDbCalculeUpdate";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import People from "src/domain/model/People";

export default class CalculeIbgeUpdateRepository implements IDbCalculeUpdate {
    constructor(@InjectModel('People') private model: Model<People>) { }

    async update(id: string, payload: People): Promise<any> {
        return await this.model.updateOne({ _id: id }, payload).exec()
    }

}