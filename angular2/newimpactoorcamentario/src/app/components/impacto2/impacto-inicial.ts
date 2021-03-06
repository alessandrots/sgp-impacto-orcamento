import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {Directive, Component, Input} from '@angular/core';
import {Http, Response} from '@angular/http';
import ConcursadoModel from '../concursado/concursado-model';
import {Router, RouteSegment} from '@angular/router';
//import {Concursado, ConcursadoService} from '../../services/concursado-service';
import {ImpactoService} from '../../services/impacto-service';
import {Concursado} from '../../services/concursado-service';
import {Observable} from 'rxjs';
import {
  Control,
  ControlGroup,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FORM_PROVIDERS,
  FormBuilder,
  Validators,
  NgFor
} from '@angular/common';

import {PaginatePipe,
  PaginationControlsCmp,
  PaginationService}
  from '../../../../node_modules/ng2-pagination';

import {NgSwitch, NgSwitchWhen} from '@angular/common';
import {LoadingIndicator, LoadingPage} from '../loading/load-page';

interface IServerResponse {
    items: ConcursadoModel[];
    total: number;
}

@Component({
  selector: 'orc-impacto-inicial-page',
  providers: [FORM_PROVIDERS, PaginationService],
  directives: [CORE_DIRECTIVES,
               FORM_DIRECTIVES,
               NgFor,
               PaginationControlsCmp,
               LoadingIndicator],
  pipes: [PaginatePipe],
  template: require('./impacto-inicial.html')
})

export default class ImpactoInicialComponente2 extends LoadingPage {

  formModel: ControlGroup;
  mainService: ImpactoService;
  result: Observable<ConcursadoModel[]>;
  @Input('data') resultAll: ConcursadoModel[] = [];
  // impacto: Concursado;
  // concursadoModel: ConcursadoModel;
  dataInicial:string;
  dataFinal:string;
  total: number;
  p: number = 1;
  // loading: boolean;
  params: RouteSegment;

  // constructor(http: Http,  private _router: Router, mainService: ConcursadoService) {
  constructor(http: Http, private _router: Router,
    params: RouteSegment, mainService: ImpactoService) {

        //para o loading(true or false)
        super(false);

        var me = this;
        me.mainService = mainService;
        this.total = 0;
        this.params = params;

        const fb = new FormBuilder();
        this.formModel = fb.group({
          'dataInicial': [null, Validators.required],
          'dataFinal': [null, Validators.required]
        });
  }

  ngOnInit() {
    if (this.params){
        console.log('ImpactoInicialComponente2 ngOnInit this.params = ',
        this.params.parameters);
    }
    //SUBSTITUINDO por chamada ao serviço
    this.onSearch();
  }

  onSearch() {
    // let dataInicial, dataFinal;
    var me=this;
    // console.log('this.params.parameters --> dataInicial = ', this.params.parameters['dataInicial']);
    // console.log('this.params.parameters --> dataFinal = ', this.params.parameters['dataFinal']);

    if (this.formModel.valid) {
      // this.mainService.searchEvent.emit(this.formModel.value);
      // console.log('this.formModel = ', this.formModel);
      me.standby();

      this.mainService
        .getImpactoPorDatas(this.formModel._value.dataInicial,
                            this.formModel._value.dataFinal)
        .subscribe(
          data => {
            this.resultAll = data;
            // console.log('this.resultAll = ', this.resultAll);
            this.total = data.length;
            me.getPage(1);
            me.ready();
          },
          error => console.error(error));
      console.log('this.mainService.searchEvent = ', this.mainService.searchEvent);
    } else if (this.params.parameters['dataInicial'] &&
               this.params.parameters['dataFinal']) {
          // console.log('ELSE onSearch ');
          me.standby();
          this.dataInicial = this.params.parameters['dataInicial'];
          this.dataFinal = this.params.parameters['dataFinal'];

          this.mainService
            .getImpactoPorDatas(this.params.parameters['dataInicial'],
                                this.params.parameters['dataFinal'])
            .subscribe(
              data => {
                this.resultAll = data;
                // console.log('this.resultAll = ', this.resultAll);
                this.total = data.length;
                me.getPage(this.params.parameters['page']);
                me.ready();
              },
              error => console.error(error));
    } else {
      me.ready();
    }
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
    // console.log('this.p page = ', this.p);
    // console.log('dataInicial = ', this.formModel._value.dataInicial +
                        // '\n dataFinal =' + this.formModel._value.dataFinal);
    hero.page = this.p;
    hero.dataInicial = this.formModel._value.dataInicial;
    hero.dataFinal = this.formModel._value.dataFinal;
    let link = ['/ImpactoDetailComponente', hero];
    this._router.navigate(link);
  }
}


function positiveNumberValidator(control: Control): any {
  if (!control.value) return null;
  const price = parseInt(control.value);
  return price === null ||
    typeof price === 'number' &&
         price > 0 ? null : {positivenumber: true};
}
