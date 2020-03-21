import IDbCalculeFindAll from "./interface/IDbCalculeIbgeFindAll";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import People from "src/domain/model/People";

export default class CalculeIbgeFindAllRepository implements IDbCalculeFindAll{
    constructor(@InjectModel('People') private peopleModel:Model<People>){}
    async findAll(): Promise<any> {
        return await this.peopleModel.find().exec();
    }

}