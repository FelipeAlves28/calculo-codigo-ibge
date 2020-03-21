import { Injectable, Inject, Post } from '@nestjs/common';
import People from 'src/domain/model/People';
import IDbCalculeCreated from 'src/infrastructure/repository/interface/IDbCalculeCreated';
import ICalculeIbgeCreated from './interface/ICalculeIbgeCreated';
import InfoIbgeService from './InfoIbgeService';

@Injectable()
export class CalculeIbgeCreatedService implements ICalculeIbgeCreated {

  constructor(@Inject('CalculeIbgeCreatedRepository') private readonly repository: IDbCalculeCreated,
    @Inject('InfoIbge') private readonly infoIbge: InfoIbgeService) { }

  async execute(people: People) {
    let codigoIbge: [] = await this.infoIbge.execute()
    let cpf = people.cpf.slice(9,11)
    
    codigoIbge.forEach(function (elem) {
      let arrayElem = JSON.stringify(elem);
      let codeIbge = arrayElem.slice(6, 12);
      let calcule = parseInt(codeIbge) * parseInt(cpf);
      console.log(calcule);
      
    })

    return await this.repository.create(people);
  }

}
