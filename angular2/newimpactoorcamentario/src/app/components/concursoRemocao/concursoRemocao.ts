import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Http, Response} from '@angular/http';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from '../../../../node_modules/ng2-pagination';
import ConcursoRemocaoModel from './concurso-remocao-model';
import { Router, RouteSegment} from '@angular/router';
import {ConcursoRemocao, ConcursoRemocaoService} from '../../services/concurso-remocao-service';
import {Observable} from 'rxjs';
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
  // formModel: ControlGroup;
  params: RouteSegment;
  mainService: ConcursoRemocaoService;
  formModel: ControlGroup;
  dataInicial:string;
  dataFinal:string;

  constructor(http: Http,  private _router: Router,
    mainService: ConcursoRemocaoService,
    params: RouteSegment) {
      super(false);
      // console.log('ConcursoRemocaoComponente Construtor');
      // const fb = new FormBuilder();
      var me = this;
      this.params = params;
      this.mainService = mainService;
      const fb = new FormBuilder();
      this.formModel = fb.group({
        'dataInicial': [null, Validators.required],
        'dataFinal': [null, Validators.required]
      });
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
  serverCall(meals: ConcursoRemocaoModel[], page: number): Observable<IServerResponse> {
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = start + perPage;

      return Observable
          .of({
              items: meals.slice(start, end),
              total: meals.length
          });
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
        .getRemocoesEntreDatas(this.formModel._value.dataInicial,
                                 this.formModel._value.dataFinal)
        .subscribe(
          data => {
            this.resultAll = data;
            this.total = data.length;
            me.getPage(1);
            me.ready();
          },
          error => console.error(error));
        } else if (this.params.parameters['dataInicial'] &&
                   this.params.parameters['dataFinal']) {
          // console.log('ELSE onSearch ');
          me.standby();
          this.dataInicial = this.params.parameters['dataInicial'];
          this.dataFinal = this.params.parameters['dataFinal'];

          this.mainService
            // .getAllConcursoRemocaoPorDatas(data)
            .getRemocoesEntreDatas(this.dataInicial,
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


  gotoDetail(hero: ConcursoRemocaoModel) {
    // console.log('ConcursoRemocaoComponente ==> inscricao = ', hero.numeroVaga);
    let link = ['/ConcursoRemocaoDetailComponente', hero.numeroVaga];
    this._router.navigate(link);
  }
}
