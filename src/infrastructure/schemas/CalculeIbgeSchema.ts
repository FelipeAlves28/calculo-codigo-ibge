import * as mongoose from "mongoose";

export const CalculeIbgeSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    completed: Boolean,
    calcule: {}
})