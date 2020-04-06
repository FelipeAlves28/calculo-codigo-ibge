import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export default class InfoIbge {
  constructor(private httpService: HttpService) { }

  resultInfo(): Promise<any> {
    return this.httpService.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
      .toPromise()
      .then(res => res.data)
  }


}
