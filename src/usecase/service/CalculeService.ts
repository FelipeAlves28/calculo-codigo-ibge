import { Injectable, Inject, Post } from '@nestjs/common';
import People from 'src/domain/model/People';
import IPeople from './ICalcule';
import IDbCalcule from 'src/infrastructure/database/IDbCalcule';

@Injectable()
export class CalculeService implements IPeople {


  constructor(@Inject('CalculeRepository') private readonly repository: IDbCalcule) { }

  async execute(people: People) {
    return await this.repository.create(people);
  }

}
