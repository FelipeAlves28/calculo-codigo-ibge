import { Injectable, Inject, Post } from '@nestjs/common';
import People from 'src/domain/model/People';
import IPeople from './IPeople';

@Injectable()
export class CalculeService implements IPeople{

  constructor(@Inject('CalculeRepository') private readonly repository: IPeople){}
  
  infoPeople =[
    {id: 1,name:"Felipe",cpf: "1220144541"},
    {id:2,name:"Felipe",cpf: "1220144541"},
    {id:3,name:"Felipe",cpf: "1220144541"},
    {id:4,name:"Felipe",cpf: "1220144541"},
    {id:5,name:"Felipe",cpf: "1220144541"},
    {id:6,name:"Felipe",cpf: "1220144541"},
    {id:7,name:"Felipe",cpf: "1220144541"},
    {id:8,name:"Felipe",cpf: "1220144541"},
  ]
  
  async create(people: People): Promise<any> {
    return await this.repository.create(people);
  } 
}
