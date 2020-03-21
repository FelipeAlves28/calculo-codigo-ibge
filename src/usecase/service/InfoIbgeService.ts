import { Injectable, HttpService } from '@nestjs/common';
import ICalculeIbgeFindAll from './interface/ICalculeIbgeFindAll';

@Injectable()
export default class InfoIbgeService implements ICalculeIbgeFindAll {
  constructor(private httpService: HttpService) { }
  
  execute(): Promise<any> {
    return this.httpService.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
      .toPromise()
      .then(res => res.data)
  }
}
