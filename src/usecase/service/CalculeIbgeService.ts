import { Injectable, Inject, Post } from '@nestjs/common';
import People from 'src/domain/model/People';
import ICalculeIbge from './interface/ICalculeIbge';
import { TreatApiIbge } from '../../utils/TreatApiIbge';
import InfoIbge from '../../utils/InfoIbge';
import IDbCalculeIbge from 'src/infrastructure/repository/interface/IDbCalculeIbge';

@Injectable()
export class CalculeIbgeService implements ICalculeIbge {

  constructor(@Inject('CalculeIbgeRepository') private readonly repository: IDbCalculeIbge,
    @Inject('InfoIbge') private readonly infoIbge: InfoIbge) { }
  async executeCreate(people: People) {
    TreatApiIbge.getInstance().mountObjectCalculate(people, await this.infoIbge.resultInfo())
    return await this.repository.create(people);
  }
  async executeDelete(id: string): Promise<any> {
    return await this.repository.delete(id);
  }
  async executeFindAll(): Promise<any> {
    return await this.repository.findAll();
  }
  async executeFindById(id: string): Promise<any> {
    return await this.repository.findById(id);
  }
  async executeUpdate(id: string, payload: People): Promise<any> {
    return await this.repository.update(id, payload);
  }

}
