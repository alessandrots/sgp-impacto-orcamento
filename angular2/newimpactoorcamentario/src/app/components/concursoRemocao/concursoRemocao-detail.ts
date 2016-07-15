import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Http, Response} from '@angular/http';
import ConcursoRemocaoModel from './concurso-remocao-model';
import {RouteSegment, Router} from '@angular/router';
import {ConcursoRemocao, ConcursoRemocaoService} from '../../services/concurso-remocao-service';
import ConcursoRemocaoComponente from './concursoRemocao';
import {Observable} from 'rxjs';

interface IServerResponse {
    items: ConcursoRemocaoModel[];
    total: number;
}

@Component({
  selector: 'orc-nomeacao-paginator-page',
  template: require('./concursoRemocao-detail.html'),
  providers:[ConcursoRemocaoComponente]
})

export default class ConcursoRemocaoDetailComponente {
  // result: Observable<ConcursoRemocaoModel[]>;
  @Input('data') obj: ConcursoRemocao;
  loading: boolean;
  params: RouteSegment;
  mainService: ConcursoRemocaoService;
  page:number;
  dataInicial:string;
  dataFinal:string;
  impactoInicial: ConcursoRemocaoComponente;
  concursoRemocaoModel:ConcursoRemocaoModel;

  constructor(private http: Http,
    params: RouteSegment,
    private _router: Router,
    mainService: ConcursoRemocaoService,
    impactoInicial: ConcursoRemocaoComponente) {
    this.params = params;
    this.mainService = mainService;
    this.impactoInicial = impactoInicial;
    console.log('ConcursoRemocaoDetailComponente this.params = ', this.params);
  }

  ngOnInit() {
    let id = +this.params.getParam('numeroVaga');
    console.log('ConcursoRemocaoDetailComponente numeroVaga = ', id);

    // SUBSTITUINDO por chamada ao serviço
    this.mainService
      .getConcursoRemocaoPorVaga(id)
      .subscribe(
        data => {
          // console.log('this.obj = ', this.obj);
          this.obj = data[0];

        },
        error => console.error(error));
  }

  gotoList() {
    this.concursoRemocaoModel  = new ConcursoRemocaoModel();
    this.concursoRemocaoModel.page        = this.params.parameters['page'];
    this.concursoRemocaoModel.dataInicial = this.params.parameters['dataInicial'];
    this.concursoRemocaoModel.dataFinal   = this.params.parameters['dataFinal'];

    // console.log('this.p page = ', this.concursoRemocaoModel.page +
    //             '\n dataInicial = '+ this.concursoRemocaoModel.dataInicial +
    //             '\n dataFinal =' + this.concursoRemocaoModel.dataFinal);
    // console.log('this.impactoInicial = ', this.impactoInicial);
    let link = ['/RemocaoComponente', this.concursoRemocaoModel];
    this._router.navigate(link);
  }

}
