import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Http, Response} from '@angular/http';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from '../../../../node_modules/ng2-pagination';
import ConcursadoModel from './concursado-model';
import { Router, RouteSegment} from '@angular/router';
import {Concursado, ConcursadoService} from '../../services/concursado-service';
import {Observable} from 'rxjs';
import {NgSwitch, NgSwitchWhen} from '@angular/common';
import {LoadingIndicator, LoadingPage} from '../loading/load-page';

import {
  Control,
  ControlGroup,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FORM_PROVIDERS,
  FormBuilder,
  Validators
} from '@angular/common';

interface IServerResponse {
    items: ConcursadoModel[];
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
  template: require('./concursado.html')

})
export default class ConcursadoComponente  extends LoadingPage {
  result: Observable<ConcursadoModel[]>;
  @Input('data') resultAll: ConcursadoModel[] = [];
  impacto: Concursado;
  total: number;
  p: number = 1;
  // loading: boolean;
  params: RouteSegment;
  formModel: ControlGroup;
  dataInicial:string;
  dataFinal:string;
  mainService: ConcursadoService;

  constructor(http: Http,  private _router: Router,
    mainService: ConcursadoService,
    params: RouteSegment) {
    super(true);
    // console.log('ConcursadoComponente Construtor');
    var me = this;
    const fb = new FormBuilder();
    this.formModel = fb.group({
      'dataInicial': [null, Validators.required],
      'dataFinal': [null, Validators.required]
    });

    // me.standby();
    //SUBSTITUINDO por chamada ao serviço
    mainService
      .getConcursadosPorDatas('01/01/2014', '01/07/2015')
      .subscribe(
        data => {
          this.resultAll = data;
          this.total = data.length;
          me.getPage(1);
          me.ready();
        },
        error => console.error(error));
  }

  ngOnInit() {
    var me = this;
    if (this.params){
        console.log('ConcursoRemocaoComponente ngOnInit this.params = ',
        this.params.parameters);
    }
    //SUBSTITUINDO por chamada ao serviço
    this.onSearch();
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
      // this.loading = true;
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

  gotoDetail(hero: ConcursadoModel) {
    console.log('ConcursadoComponente ==> ConcursadoModel = ', hero);
    let link = ['/ConcursadoDetailComponente', hero.inscricao];
    this._router.navigate(link);
  }

  onSearch() {
    // let dataInicial, dataFinal;
    var me=this;
    console.log('this.params -->  = ', this.params);
    // console.log('this.params.parameters --> dataInicial = ', this.params.parameters['dataInicial']);
    // console.log('this.params.parameters --> dataFinal = ', this.params.parameters['dataFinal']);

    console.log('this.formModel = ', this.formModel.value);
    if (this.formModel.valid) {
      // this.mainService.searchEvent.emit(this.formModel.value);

      me.standby();

      // //SUBSTITUINDO por chamada ao serviço
      this.mainService
        // .getAllConcursoRemocaoPorDatas(data)
        .getConcursadosPorDatas(this.formModel._value.dataInicial,
                                 this.formModel._value.dataFinal)
        .subscribe(
          data => {
            this.resultAll = data;
            this.total = data.length;
            me.getPage(1);
            me.ready();
          },
          error => console.error(error));
        } else if (this.params && (this.params.parameters['dataInicial'] &&
                   this.params.parameters['dataFinal'])) {
          // console.log('ELSE onSearch ');
          me.standby();
          this.dataInicial = this.params.parameters['dataInicial'];
          this.dataFinal = this.params.parameters['dataFinal'];

          this.mainService
            // .getAllConcursoRemocaoPorDatas(data)
            .getConcursadosPorDatas(this.dataInicial,
                                     this.dataFinal)
            .subscribe(
              data => {
                this.resultAll = data;
                this.total = data.length;
                me.getPage(1);
                me.ready();
              },
              error => console.error(error));
    } else {
      me.ready();
    }
  }

}
