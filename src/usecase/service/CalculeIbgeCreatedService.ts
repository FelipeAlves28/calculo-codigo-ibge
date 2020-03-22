import { Injectable, Inject, Post } from '@nestjs/common';
import People from 'src/domain/model/People';
import IDbCalculeCreated from 'src/infrastructure/repository/interface/IDbCalculeCreated';
import ICalculeIbgeCreated from './interface/ICalculeIbgeCreated';
import InfoIbgeService from './InfoIbgeService';
import Constants from 'src/utils/Constants';

@Injectable()
export class CalculeIbgeCreatedService implements ICalculeIbgeCreated {

  constructor(@Inject('CalculeIbgeCreatedRepository') private readonly repository: IDbCalculeCreated,
    @Inject('InfoIbge') private readonly infoIbge: InfoIbgeService) { }

  async execute(people: People) {
    let codigoIbge: [] = await this.infoIbge.execute()
    let cpf = people.cpf.slice(9,11)
    people.calculo = new Array

    codigoIbge.forEach(function (elem) {
      let codeIbge = JSON.stringify(elem).slice(6, 12);
      let calcule = parseInt(codeIbge) * parseInt(cpf);
      
      let arrayNameCity = JSON.stringify(elem);
      let nameCity = arrayNameCity.split('"',30).toString()
        .split('id',20).toString()
        .split('municipio',1).toString()
        .slice(23,45).toLocaleUpperCase().replace(",,,"," ");

      let object = {
        code: codeIbge,
        city: nameCity,
        calculo: calcule,
        formula: Constants.FORMULA
      }

      people.calculo.push(object);
    })
  
    // return await this.repository.create(people);
    return people
  }

}
