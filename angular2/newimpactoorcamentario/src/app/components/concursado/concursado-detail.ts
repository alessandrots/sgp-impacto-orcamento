import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Http, Response} from '@angular/http';
import ConcursadoModel from './concursado-model';
import {RouteSegment} from '@angular/router';
// import {Concursado, ConcursadoService} from '../../services/concursado-service';
import {Observable} from 'rxjs';

interface IServerResponse {
    items: ConcursadoModel[];
    total: number;
}

@Component({
  selector: 'orc-nomeacao-paginator-page',
  template: require('./concursado-detail.html')

})

export default class ConcursadoDetailComponente {
  // result: Observable<ConcursadoModel[]>;
  // @Input('data') resultAll: ConcursadoModel[] = [];
  loading: boolean;
  params: RouteSegment;
  hero: ConcursadoModel;
  
  constructor(private http: Http, params: RouteSegment) { 
    this.params = params; 
    console.log('ConcursadoDetailComponente this.params = ', this.params);
  }

  ngOnInit() {
    // this.hero = this.params.getParam('hero');
    let id = +this.params.getParam('inscricao');
    // let id = 0;
    console.log('ConcursadoDetailComponente inscricao = ', id);

    //SUBSTITUINDO por chamada ao serviço
    // this.orcService
    //   .getImpactoById(id)
    //   .subscribe(
    //     data => {
    //       this.obj = data;
    //       console.log('DATA = ', this.obj)
    //     },
    //     error => console.error(error));
  }

  // /**
  //  * Faz a lógica de paginação.
  //  */
  // serverCall(meals: ConcursadoModel[], page: number): Observable<IServerResponse> {
  //     const perPage = 10;
  //     const start = (page - 1) * perPage;
  //     const end = start + perPage;

  //     return Observable
  //         .of({
  //             items: meals.slice(start, end),
  //             total: meals.length
  //         });//.delay(1000); 
  // }

  // getPage(page: number) {
  //     this.loading = true;
  //     // console.log('ConcursadoDetailComponente ::: tamanho array  = ', this.resultAll.length);
  //     // console.log('ConcursadoDetailComponente ::: page: number = ', page);
  //     this.result = this.serverCall(this.resultAll, page)
  //           .do(res => {
  //               // console.log('getPage = ', res);
  //               this.total = res.total;
  //               this.p = page;
  //               this.loading = false;
  //           })
  //           .map(res => res.items);
  // }

  // gotoDetail(hero: ConcursadoModel) {
  //   console.log('ConcursadoDetailComponente ==> inscricao = ', hero);
  //   // let link = ['/NomeacaoDetail', hero.inscricao];
  //   // this._router.navigate(link);
  // }
}