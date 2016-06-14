import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {Observable} from "rxjs/Observable";
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router';
import Nomeacao from './nomeacaoModel';
import {OrcamentoService} from '../../services/orcamento-service';

@Component({
  selector: 'orc-nomeacao-page',
  providers: [],
  directives: [
    NgFor
  ],
  // styles: [require('./home.css')],
  template: require('./nomeacao.html')

})
export default class NomeacaoComponent {
  result: Nomeacao[];

  constructor(http: Http,  private _router: Router, orcService: OrcamentoService) {
    // console.log('Nomeacao http = ', http);
    // console.log('Nomeacao _router = ', _router);
     //SUBSTITUINDO por chamada ao serviço
     orcService
      .getAllImpacto()
      .subscribe(
        data => {
          this.result = data;
          console.log('NomeacaoComponent ::: DATA = ', this.result)
        },
        error => console.error(error));
  }


  gotoDetail(hero: Nomeacao) {
    console.log('hero.vaga = ', hero.vaga);
    let link = ['NomeacaoDetail', { vaga: hero.vaga }];
    this._router.navigate(link);
  }
}
