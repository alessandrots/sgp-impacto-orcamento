import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Http, Response} from '@angular/http';
import ConcursadoModel from './concursado-model';
import {Router, RouteSegment} from '@angular/router';
import {Concursado, ConcursadoService} from '../../services/concursado-service';
import {Observable} from 'rxjs';
import ImpactoInicialComponente2 from '../impacto2/impacto-inicial';

interface IServerResponse {
    items: ConcursadoModel[];
    total: number;
}

@Component({
  selector: 'orc-nomeacao-paginator-page',
  template: require('./concursado-detail.html'),
  providers:[ImpactoInicialComponente2]
})

export default class ConcursadoDetailComponente {
  // result: Observable<ConcursadoModel[]>;
  @Input('data') obj: Concursado;
  loading: boolean;
  params: RouteSegment;
  mainService: ConcursadoService;
  page:number;
  dataInicial:string;
  dataFinal:string;
  impactoInicial: ImpactoInicialComponente2;
  concursadoModel: ConcursadoModel;

  constructor(private http: Http,
    params: RouteSegment,
    private _router: Router,
    mainService: ConcursadoService,
    impactoInicial: ImpactoInicialComponente2) {
      this.params = params;
      this.mainService = mainService;
      this.impactoInicial = impactoInicial;
    // console.log('ConcursadoDetailComponente this.params = ', this.params);
  }

  ngOnInit() {
    // let id = +this.params.getParam('inscricao');
    // console.log('ConcursadoDetailComponente inscricao = ', id);
    // console.log('ngOnInit this.params = ', this.params.parameters);
    let id = +this.params.parameters['inscricao'];
    // console.log('ConcursadoDetailComponente inscricao = ', id);

    //SUBSTITUINDO por chamada ao serviço
    this.mainService
      .getConcursadoPorId(id)
      .subscribe(
        data => {
          this.obj = data;
          // console.log('this.obj = ', this.obj);
        },
        error => console.error(error));
  }

  gotoList() {
    this.page        = this.params.parameters['page'];
    this.dataInicial = this.params.parameters['dataInicial'];
    this.dataFinal   = this.params.parameters['dataFinal'];
    this.concursadoModel  = new ConcursadoModel(null,null, null,null,
                                                null,null, null,null,
                                                null,null, null,null,
                                                null, this.dataInicial,
                                                this.dataFinal, this.page);

    // console.log('this.p page = ', this.page +
    //             '\n dataInicial = '+ this.dataInicial +
    //             '\n dataFinal =' + this.dataFinal);
    // console.log('this.impactoInicial = ', this.impactoInicial);
    let link = ['/ImpactoInicialComponente2', this.concursadoModel];
    this._router.navigate(link);
  }

}
