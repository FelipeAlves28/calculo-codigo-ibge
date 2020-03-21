import { Injectable, Inject, Post } from '@nestjs/common';
import People from 'src/domain/model/People';
import IDbCalculeCreated from 'src/infrastructure/repository/interface/IDbCalculeCreated';
import ICalculeIbgeCreated from './interface/ICalculeIbgeCreated';

@Injectable()
export class CalculeIbgeCreatedService implements ICalculeIbgeCreated {


  constructor(@Inject('CalculeIbgeCreatedRepository') private readonly repository: IDbCalculeCreated) { }

  async execute(people: People) {

    return await this.repository.create(people);
  }

}
