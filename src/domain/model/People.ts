import { Document } from 'mongoose';
import Calcule from './Calcule';
export default class People extends Document {

    name: string
    cpf: string
    completed: boolean
    calcule: Array<Calcule>

}