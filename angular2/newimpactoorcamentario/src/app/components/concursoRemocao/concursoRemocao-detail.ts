import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Http, Response} from '@angular/http';
import ConcursoRemocaoModel from './concurso-remocao-model';
import {RouteSegment} from '@angular/router';
import {ConcursoRemocao, ConcursoRemocaoService} from '../../services/concurso-remocao-service';
import {Observable} from 'rxjs';

interface IServerResponse {
    items: ConcursoRemocaoModel[];
    total: number;
}

@Component({
  selector: 'orc-nomeacao-paginator-page',
  template: require('./concursoRemocao-detail.html')

})

export default class ConcursoRemocaoDetailComponente {
  // result: Observable<ConcursoRemocaoModel[]>;
  @Input('data') obj: ConcursoRemocao;
  loading: boolean;
  params: RouteSegment;
  mainService: ConcursoRemocaoService;

  constructor(private http: Http, params: RouteSegment, mainService: ConcursoRemocaoService) {
    this.params = params;
    this.mainService = mainService;
    console.log('ConcursoRemocaoDetailComponente this.params = ', this.params);
  }

  ngOnInit() {
    let id = +this.params.getParam('numeroVaga');
    console.log('ConcursoRemocaoDetailComponente numeroVaga = ', id);

    // console.log('ngOnInit this.params = ', this.params.parameters);
    // let id = +this.params.parameters['numeroVaga'];
    // console.log('ConcursoRemocaoDetailComponente numeroVaga = ', id);

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

}
