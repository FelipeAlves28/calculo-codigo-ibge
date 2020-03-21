import { Document } from 'mongoose';

export default class People extends Document {

    name: string
    cpf: string
    completed: boolean
    calculo: number

}