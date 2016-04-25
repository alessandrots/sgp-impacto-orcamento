import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Observable} from "rxjs/Observable";
import {Http, Response} from 'angular2/http';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from '../../../../node_modules/ng2-pagination';
import NomeacaoPag from './nomeModelPag';
// import {Product, ProductService} from '../../services/product-service';

@Component({
  selector: 'orc-nomeacao-paginator-page',
  directives: [
    NgFor,
    PaginationControlsCmp
  ],
  pipes: [PaginatePipe],
  providers: [PaginationService],
  // styles: [require('./home.css')],
  template: require('./nomepaging.html')

})
export default class NomeacaoComponentPag {
  // products: Observable<Product[]>;
  @Input('data') result: NomeacaoPag[] = [];

  constructor(http: Http) {
    console.log('NomeacaotPaging http = ', http);

     //se apontar para localhost dá pala qdo chamando de fora de outra máquina
    //  http.get('http://10.224.126.253:3001/sgp/astec/orcamento/nomeacao')
     http.get('/sgp/astec/orcamento/nomeacao')
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          this.result = data;
        },
        err => console.error('ERROR = ', err),
        () => console.log('done')
      );
  }
}
