import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
// import {Observable} from "rxjs/Observable";
import {Http, Response} from '@angular/http';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from '../../../../node_modules/ng2-pagination';
import NomeacaoPag from './nomeModelPag';
import { Router } from '@angular/router';
import {Impacto, OrcamentoService} from '../../services/orcamento-service';
import {Observable} from 'rxjs';

interface IServerResponse {
    items: NomeacaoPag[];
    total: number;
}

@Component({
  selector: 'orc-nomeacao-paginator-page',
  directives: [
    NgFor,
    PaginationControlsCmp
  ],
  pipes: [PaginatePipe],
  providers: [PaginationService],
  // styles: [require('./home.css')],
  template: require('./nomepaging.html')

})
export default class NomeacaoComponentPag {
  // products: Observable<Product[]>;
  // @Input('data') result: NomeacaoPag[] = [];
  result: Observable<NomeacaoPag[]>;
  @Input('data') resultAll: NomeacaoPag[] = [];
  impacto: Impacto;
  total: number;
  p: number = 1;
  loading: boolean;
  

  constructor(http: Http,  private _router: Router, orcService: OrcamentoService) {
    console.log('NomeacaotPaging Construtor');
    var me = this;
    //console.log('NomeacaotPaging http = ', http);
    // const id = parseInt(params.get('vaga'));
    // this.orcService = orcService;
    //SUBSTITUINDO por chamada ao serviço
    orcService
      .getAllImpacto()
      .subscribe(
        data => {
          this.resultAll = data;
          this.total = data.length;

          me.getPage(1);
        },
        error => console.error(error));
  }

  /**
   * Faz a lógica de paginação.
   */
  serverCall(meals: NomeacaoPag[], page: number): Observable<IServerResponse> {
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = start + perPage;

      return Observable
          .of({
              items: meals.slice(start, end),
              total: meals.length
          });//.delay(1000); 
  }

  getPage(page: number) {
      this.loading = true;
      // console.log('NomeacaoComponentPag ::: tamanho array  = ', this.resultAll.length);
      console.log('NomeacaoComponentPag ::: page: number = ', page);
      this.result = this.serverCall(this.resultAll, page)
            .do(res => {
                console.log('getPage = ', res);
                this.total = res.total;
                this.p = page;
                this.loading = false;
            })
            .map(res => res.items);
  }

  gotoDetail(hero: NomeacaoPag) {
    console.log('hero.vaga = ', hero.vaga);
    let link = ['NomeacaoDetail', { vaga: hero.vaga }];
    this._router.navigate(link);
  }
}