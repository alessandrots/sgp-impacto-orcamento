import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Observable} from "rxjs/Observable";
import {Http, Response} from 'angular2/http';
import {PaginatePipe, PaginationControlsCmp, PaginationService, IPaginationInstance} from '../../../../node_modules/ng2-pagination';
import NomeacaoPag from '../nomeacaoPaging/nomeModelPag';
import { Router } from 'angular2/router';
import {Impacto, OrcamentoService} from '../../services/orcamento-service';
import {StringFilterPipe} from "../util/string-filter-pipe";

@Component({
  selector: 'orc-nomeacao-paginator-page',
  directives: [
    NgFor,
    PaginationControlsCmp
  ],
  pipes: [PaginatePipe, StringFilterPipe],
  providers: [PaginationService],
  // styles: [require('./home.css')],
  template: require('./nomepaging.html')

})
export default class NomeacaoComponentPagAll {
  // products: Observable<Product[]>;
  @Input('data') result: NomeacaoPag[] = [];
  impacto: Impacto;

   public filter: string = '';
   public maxSize: number = 7;
   public directionLinks: boolean = true;
   public autoHide: boolean = false;
   public config: IPaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
   };

  constructor(http: Http,  private _router: Router, orcService: OrcamentoService) {
    //console.log('NomeacaoComponentPagAll _router = ', _router);
    //console.log('NomeacaoComponentPagAll http = ', http);

    //SUBSTITUINDO por chamada ao serviço
    orcService
      .getAllImpacto()
      .subscribe(
        data => {
          this.result = data;
          // console.log('NomeacaoComponentPagAll ::: DATA = ', this.result)
          // console.log('NomeacaoComponentPagAll ::: DATA = ', this.result);
        },
        error => console.error(error));
  }

  gotoDetail(hero: NomeacaoPag) {
    console.log('hero.vaga = ', hero.vaga);
    let link = ['NomeacaoDetail', { vaga: hero.vaga }];
    this._router.navigate(link);
  }

  onPageChange(number: number) {
      console.log('change to page', number);
      this.config.currentPage = number;
  }
}