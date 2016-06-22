import ParentService from './service-parent';
import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class Concursado {
  constructor(
    public inscricao:string,
    public numeroEdital:string,
    public ufNomeacao:string,
    public cargo:string,
    public cargoDescricao: string,
    public nome:string,
    public numeroPortaria: string,
    public dataNomeacao: string,
    public dataExercicio: string,
    public numeroVaga: string,
    public origemVaga: string,
    public dataDesprovimento: string,
    public leiVaga: string) {
      console.log(' Model Concursado...');
  }

}

@Injectable()
export class ConcursadoService  {//extends ParentService {
  searchEvent: EventEmitter<any> = new EventEmitter();
  parentService: ParentService;

  constructor(private http: Http) {
    // super('dev');
    this.parentService= new ParentService('dev');
  }

  /**
  * Retorna o array de impacto
  **/
  getAllConcursadoEntredatas(): Observable<Concursado[]> {
    console.log('service ::: getAllConcursadoEntredatas ==>  ');
    return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursadoService/getConcursadoPorDatas?dataInicial=01/01/2015&dataFinal=31/05/2015')
      .map(response => response.json());
  }

  getConcursadoPorId(inscricao:number): Observable<Concursado> {
    console.log('service ::: getAllConcursadoEntredatas ==>  ');
    return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursadoService/recuperarNomeacaoPorInscricao/'+ inscricao)
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
