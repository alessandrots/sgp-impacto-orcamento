import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Http, Response} from '@angular/http';
import ConcursadoModel from './concursado-model';
import {RouteSegment} from '@angular/router';
import {Concursado, ConcursadoService} from '../../services/concursado-service';
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
  @Input('data') obj: Concursado;
  loading: boolean;
  params: RouteSegment;
  mainService: ConcursadoService;

  constructor(private http: Http, params: RouteSegment, mainService: ConcursadoService) {
    this.params = params;
    this.mainService = mainService;
    console.log('ConcursadoDetailComponente this.params = ', this.params);
  }

  ngOnInit() {
    // this.hero = this.params.getParam('hero');
    let id = +this.params.getParam('inscricao');
    // let id = 0;
    console.log('ConcursadoDetailComponente inscricao = ', id);

    //SUBSTITUINDO por chamada ao serviço
    this.mainService
      .getConcursadoPorId(id)
      .subscribe(
        data => {
          this.obj = data;
          console.log('this.obj = ', this.obj);
        },
        error => console.error(error));
  }

}
