import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

export class ConcursoRemocao {
  constructor(
    public numeroVaga:string,
    public cargoDescricao:string,
    public ramoOrigem:string,
    public ufOrigem:string,
    public unidadeOrigem:string,
    public ramoDestino:string,
    public ufDestino:string,
    public unidadeDestino:string,
    public lei:string,
    public motivo:string,
    public ultimoOcupante:string,
    public dataRemocaoGravacao:string,
    public totalRemocao:string) {
      console.log(' Model ConcursoRemocao...');
  }

}

@Injectable()
export class ConcursoRemocaoService {
  searchEvent: EventEmitter<any> = new EventEmitter();
  private urlBase: string;
  // private http: Http;

  constructor(private http: Http) {
    // this.http = http;
    this.urlBase = 'http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/';
  }

  /**
  * Retorna o array de impacto
  * http://localhost:9090/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/
  getRemocoesPorDatas?dataMaxima=01/01/2015
  **/
  getAllConcursoRemocaoPorDatas(data:string): Observable<ConcursoRemocao[]> {
    console.log('service ::: getAllConcursoRemocaoEntredatas ==>  ');
    // return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/getRemocoesPorDatas?dataMaxima=01/01/2015');
    return this.http.get(this.urlBase + 'getRemocoesPorDatas?dataMaxima='+ data)
      .map(response => response.json());
  }

  getConcursoRemocaoPorVaga(vaga:number): Observable<ConcursoRemocao> {
    console.log('service ::: getConcursoRemocaoPorVaga ==>  vaga = ', vaga);
    // return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarRemocoesPorVaga/'+ vaga)
    return this.http.get(this.urlBase + 'recuperarRemocoesPorVaga/'+ vaga)
      .map(response => response.json());
  }

  getRemocoesPorDiaMesAno(dia:string, mes:string, ano:string): Observable<ConcursoRemocao[]> {
    // console.log('service ::: getRemocoesPorDiaMesAno ==>  = ', diaMesAno);
    // return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarRemocoesPorVaga/'+ vaga)
    return this.http.get(this.urlBase + 'getRemocoesPorDiaMesAno/'+ dia + '/' + mes + '/' + ano)
      .map(response => response.json());
  }

  getRemocoesEntreDatas(dataInicial:string, dataFinal:string): Observable<ConcursoRemocao[]> {
    // console.log('service ::: getRemocoesPorDiaMesAno ==>  = ', diaMesAno);
    // return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarRemocoesPorVaga/'+ vaga)
    return this.http.get(this.urlBase + 'recuperarRemocoesEntreDatas?dataInicial='+ dataInicial +'&dataFinal='+dataFinal)
      .map(response => response.json());
  }

  getDatasRemocoes(): Observable<ConcursoRemocao[]> {
    console.log('service ::: getDatasRemocoes ==>  ');
    // return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarDatasRemocoes')
    return this.http.get(this.urlBase + 'recuperarDatasRemocoes')
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
