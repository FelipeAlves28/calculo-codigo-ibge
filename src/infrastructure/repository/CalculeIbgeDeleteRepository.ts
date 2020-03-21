import IDbCalculeIbgeDelete from "./interface/IDbCalculeIbgeDelete";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import People from "src/domain/model/People";

export default class CalculeIbgeDeleteRepository implements IDbCalculeIbgeDelete{
    
    constructor(@InjectModel('People') private readonly model: Model<People>){}
    async delete(id: string): Promise<any> {
        return await this.model.deleteOne({_id : id}).exec() 
    }

}