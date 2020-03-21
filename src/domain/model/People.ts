import { Document } from 'mongoose';
import Calculo from './Calculo';

export default class People extends Document {

    name: string
    cpf: string
    completed: boolean
    calculo: Calculo

}