import ParentService from './service-parent';
import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Concursado, SearchParams} from './concursado-service';

@Injectable()
export class ImpactoService  {//extends ParentService {
  searchEvent: EventEmitter<any> = new EventEmitter();
  parentService: ParentService;

  constructor(private http: Http) {
    // super('dev');
    // this.parentService= new ParentService('dev');
  }

  search(params: SearchParams): Observable<Concursado[]> {
    console.log('ConcursadoService ==> search = ', params);
    return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursadoService/getConcursadoPorDatas?dataInicial=01/01/2015&dataFinal=31/05/2015')
      .map(response => response.json());
  }

  /**
  * Retorna o array de impacto
  **/
  getImpactoPorDatas(dataInicial:string, dataFinal:string): Observable<Concursado[]> {
    console.log('service ::: getImpactoPorDatas ==> dataInicial= ', dataInicial + ' dataFinal= ', dataFinal);
    // http://localhost:8080/impactorcamentosgpmpu/ns/rest/impactoOrcamentoService/realizarImpactoRemocaoComConcursadosEntreDatas?dataInicial=01/01/2015&dataFinal=31/05/2015
    return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/impactoOrcamentoService/realizarImpactoRemocaoComConcursadosEntreDatas?dataInicial='+ dataInicial +'&dataFinal='+dataFinal)
      .map(response => response.json());
  }

}

/**
 * Encodes the object into a valid query string.
 */
function encodeParams(params: any): URLSearchParams {
  return Object.keys(params)
    .filter(key => params[key])
    .reduce((accum: URLSearchParams, key: string) => {
      accum.append(key, params[key]);
      return accum;
    }, new URLSearchParams());
}
