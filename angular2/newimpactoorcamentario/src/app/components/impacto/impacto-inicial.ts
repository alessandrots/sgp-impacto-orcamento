import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {Directive, Component, Input} from '@angular/core';
import {Control, ControlGroup, Validators, FormBuilder, FORM_DIRECTIVES} from '@angular/common';
import {NgFor} from '@angular/common';
import {Http, Response} from '@angular/http';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from '../../../../node_modules/ng2-pagination';
import ConcursoRemocaoModel from '../concursoRemocao/concurso-remocao-model';
import { Router } from '@angular/router';
import {ConcursoRemocao, ConcursoRemocaoService} from '../../services/concurso-remocao-service';
import ConcursoRemocaoComponente from '../concursoRemocao/concursoRemocao';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs';

interface IServerResponse {
    items: ConcursoRemocaoModel[];
    total: number;
}

@Component({
  selector: 'orc-impacto-inicial-page',
  directives: [
    NgFor,
    PaginationControlsCmp,
    FORM_DIRECTIVES
  ],
  pipes: [PaginatePipe],
  providers: [PaginationService],
  template: require('./impacto-inicial.html')

})

@Routes([
    {path: '/RemocaoComponente/:data', component: ConcursoRemocaoComponente}
])

export default class ImpactoInicialComponente {
  result: Observable<ConcursoRemocaoModel[]>;
  @Input('data') resultAll: ConcursoRemocaoModel[] = [];
  dataRemocaoGravacao: string;
  total: number;
  p: number = 1;
  loading: boolean;
  // formModel: ControlGroup;
  // submitted: boolean;
  mainService: ConcursoRemocaoService

  constructor(http: Http,  private _router: Router, mainService: ConcursoRemocaoService) {
    // console.log('ConcursoRemocaoComponente Construtor');
    var me = this;
    // this.impacto = new ConcursoRemocaoModel();
    me.mainService = mainService;

    const fb = new FormBuilder();
    // this.formModel = fb.group({
    //   'dataRemocaoGravacao': ['', Validators.required]
    // });

    //SUBSTITUINDO por chamada ao serviço
    mainService
      .getDatasRemocoes()
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
      this.loading = true;
      // console.log('ConcursoRemocaoComponente ::: tamanho array  = ', this.resultAll.length);
      // console.log('ConcursoRemocaoComponente ::: page: number = ', page);
      this.result = this.serverCall(this.resultAll, page)
            .do(res => {
                // console.log('getPage = ', res);
                this.total = res.total;
                this.p = page;
                this.loading = false;
            })
            .map(res => res.items);
  }

  gotoDetail() {
    // console.log('ConcursoRemocaoComponente ==> dataRemocaoGravacao = ', this.dataRemocaoGravacao);
    // let link = ['/ConcursoRemocaoDetailComponente', hero.numeroVaga];
    // this._router.navigate(link);
  }

  mySubmit(data_) {
    var me=this, data;
    // console.log('this.dataRemocaoGravacao = ', this.dataRemocaoGravacao);
    console.log('data_ = ', data_);

    // if (this.formModel.valid) {
    //   console.log('this.formModel = ', this.formModel);
    //   this.submitted = true;
    //   // console.log('this.formModel = ', this.formModel.dataRemocaoGravacao.value);
    // }


    // if (me.dataRemocaoGravacao) {
    if (data_) {
      // data = me.dataRemocaoGravacao.split(' ');
      data = data_.split(' ');
      console.log('ImpactoInicialComponente data = ', data);
      let link = ['/RemocaoComponente',data[0]];
      this._router.navigate(link);

      // me.mainService
      //   .getAllConcursoRemocaoPorDatas(data[0])
      //   .subscribe(
      //     data => {
      //       console.log('getAllConcursoRemocaoPorDatas ==> data.length = ', data.length);;
      //     },
      //     error => console.error(error));
    }

  }
}
