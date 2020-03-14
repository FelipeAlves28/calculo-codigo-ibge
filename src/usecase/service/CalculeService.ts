import { Injectable, Inject, Post } from '@nestjs/common';
import People from 'src/domain/model/People';
import IPeople from './IPeople';
import IDbCalcule from 'src/infrastructure/database/IDbCalcule';

@Injectable()
export class CalculeService implements IDbCalcule{
 

  constructor(@Inject('CalculeRepository') private readonly repository: IPeople){}
  
  async create(people: People): Promise<any> {
    return await this.repository.execute(people);
  }
}
