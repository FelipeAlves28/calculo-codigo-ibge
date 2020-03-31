import { Injectable, Inject, Post } from '@nestjs/common';
import People from 'src/domain/model/People';
import IDbCalculeCreated from 'src/infrastructure/repository/interface/IDbCalculeCreated';
import ICalculeIbgeCreated from './interface/ICalculeIbgeCreated';
import { TreatApiIbge } from '../../utils/TreatApiIbge';
import InfoIbge from '../../utils/InfoIbge';
@Injectable()
export default class CalculeIbgeCreatedService implements ICalculeIbgeCreated {

  constructor(@Inject('CalculeIbgeCreatedRepository') private readonly repository: IDbCalculeCreated,
    @Inject('InfoIbge') private readonly infoIbge: InfoIbge) { }

  async execute(people: People) {
    TreatApiIbge.getInstance().mountObjectCalculate(people, await this.infoIbge.execute());
    // return await this.repository.create(people);
    return people
  }

}
