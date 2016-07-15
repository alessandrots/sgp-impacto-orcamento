import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Http, Response} from '@angular/http';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from '../../../../node_modules/ng2-pagination';
import ConcursoRemocaoModel from './concurso-remocao-model';
import { Router, RouteSegment} from '@angular/router';
import {ConcursoRemocao, ConcursoRemocaoService} from '../../services/concurso-remocao-service';
import {Observable} from 'rxjs';
import {LoadingIndicator, LoadingPage} from '../loading/load-page';

interface IServerResponse {
    items: ConcursoRemocaoModel[];
    total: number;
}

@Component({
  selector: 'orc-nomeacao-paginator-page',
  directives: [
    NgFor,
    PaginationControlsCmp,
    LoadingIndicator
  ],
  pipes: [PaginatePipe],
  providers: [PaginationService],
  template: require('./concursoRemocao.html')

})
export default class ConcursoRemocaoComponente   extends LoadingPage {
  result: Observable<ConcursoRemocaoModel[]>;
  @Input('data') resultAll: ConcursoRemocaoModel[] = [];
  impacto: ConcursoRemocao;
  total: number;
  p: number = 1;
  // loading: boolean;
  params: RouteSegment;
  mainService: ConcursoRemocaoService;


  constructor(http: Http,  private _router: Router, mainService: ConcursoRemocaoService, params: RouteSegment) {
    super(true);
    // console.log('ConcursoRemocaoComponente Construtor');
    var me = this;
    this.params = params;
    this.mainService = mainService;
  }

  ngOnInit() {

    var me = this;
    let dia = this.params.getParam('dia');
    let mes = this.params.getParam('mes');
    let ano = this.params.getParam('ano');
    // console.log('ConcursoRemocaoComponente dia = ', dia);
    // console.log('ConcursoRemocaoComponente mes = ', mes);
    // console.log('ConcursoRemocaoComponente ano = ', ano);
    me.standby();

    //SUBSTITUINDO por chamada ao serviço
    this.mainService
      // .getAllConcursoRemocaoPorDatas(data)
      .getRemocoesPorDiaMesAno(dia, mes, ano)
      .subscribe(
        data => {
          this.resultAll = data;
          this.total = data.length;
          me.getPage(1);
          me.ready();
        },
        error => console.error(error));
  }

  /**
   * Faz a lógica de paginação.
   */
  serverCall(meals: ConcursoRemocaoModel[], page: number): Observable<IServerResponse> {
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
      // this.loading = true;
      // console.log('ConcursoRemocaoComponente ::: tamanho array  = ', this.resultAll.length);
      // console.log('ConcursoRemocaoComponente ::: page: number = ', page);
      this.result = this.serverCall(this.resultAll, page)
            .do(res => {
                // console.log('getPage = ', res);
                this.total = res.total;
                this.p = page;
                // this.loading = false;
            })
            .map(res => res.items);
  }

  gotoDetail(hero: ConcursoRemocaoModel) {
    // console.log('ConcursoRemocaoComponente ==> inscricao = ', hero.numeroVaga);
    let link = ['/ConcursoRemocaoDetailComponente', hero.numeroVaga];
    this._router.navigate(link);
  }
}
