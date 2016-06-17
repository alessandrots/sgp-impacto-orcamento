import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Http, Response} from '@angular/http';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from '../../../../node_modules/ng2-pagination';
import ConcursadoModel from './concursado-model';
import { Router } from '@angular/router';
import {Concursado, ConcursadoService} from '../../services/concursado-service';
import {Observable} from 'rxjs';

interface IServerResponse {
    items: ConcursadoModel[];
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
  template: require('./concursado.html')

})
export default class ConcursadoComponente {
  result: Observable<ConcursadoModel[]>;
  @Input('data') resultAll: ConcursadoModel[] = [];
  impacto: Concursado;
  total: number;
  p: number = 1;
  loading: boolean;
  

  constructor(http: Http,  private _router: Router, mainService: ConcursadoService) {
    // console.log('ConcursadoComponente Construtor');
    var me = this;
    
    //SUBSTITUINDO por chamada ao serviço
    mainService
      .getAllConcursadoEntredatas()
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
  serverCall(meals: ConcursadoModel[], page: number): Observable<IServerResponse> {
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
      // console.log('ConcursadoComponente ::: tamanho array  = ', this.resultAll.length);
      // console.log('ConcursadoComponente ::: page: number = ', page);
      this.result = this.serverCall(this.resultAll, page)
            .do(res => {
                // console.log('getPage = ', res);
                this.total = res.total;
                this.p = page;
                this.loading = false;
            })
            .map(res => res.items);
  }
// 
  gotoDetail(hero: ConcursadoModel) {
    console.log('ConcursadoComponente ==> ConcursadoModel = ', hero);
    let link = ['/ConcursadoDetailComponente', hero.inscricao];
    this._router.navigate(link);
    // let link = ['/NomeacaoDetail', hero.vaga];
    // this._router.navigate(link);
  }
}