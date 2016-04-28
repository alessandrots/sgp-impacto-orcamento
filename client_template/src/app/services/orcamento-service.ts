import {EventEmitter, Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

export class Impacto {
  constructor(
    public edital: string,
    public ramo: string,
    public uf: string,
    public cargo: string,
    public cargoDescricao: string,
    public nome: string,
    public port: string,
    public nomeacaoData: string,
    public dataExercicio: string,
    public vaga: string,
    public origemVaga: string,
    public desprovimento: string,
    public leiVaga: string,
    public dataPortariaSemEfeito: string,
    public numeroPortariaSemEfeito: string,
    public field16: string) { 
      console.log(' Model Impacto...');
  }
  
}

@Injectable()
export class OrcamentoService {
  searchEvent: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) {}

  /**
  * Retorna um impacto em específico
  **/
  getImpactoById(vaga: number): Observable<Impacto> {
    console.log('service ::: getImpactoById ==> vaga = ', vaga);
    
    return this.http.get('/sgp/astec/orcamento/nomeacao/detalhe/'+vaga)
      .map(response => response.json());  
  }

  /**
  * Retorna o array de impacto
  **/
  getAllImpacto(): Observable<Impacto[]> {
    console.log('service ::: getAllImpacto ==>  ');
    
    return this.http.get('/sgp/astec/orcamento/nomeacao')
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
