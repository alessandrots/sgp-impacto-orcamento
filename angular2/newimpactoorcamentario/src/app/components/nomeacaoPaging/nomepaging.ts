import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Observable} from "rxjs/Observable";
import {Http, Response} from 'angular2/http';
import NomeacaoPag from './nomeModelPag';
// import {Product, ProductService} from '../../services/product-service';

/**
TODO
  1) Colocar a parte de paginação:
   - http://michaelbromley.github.io/ng2-pagination/
   - https://github.com/michaelbromley/ng2-pagination
*/


@Component({
  selector: 'orc-home-page',
  providers: [],
  directives: [
    NgFor
  ],
  // styles: [require('./home.css')],
  template: require('./nomepaging.html')
  
})
export default class NomeacaoComponentPag {
  // products: Observable<Product[]>;
  result: NomeacaoPag[];

  constructor(http: Http) {
    console.log('NomeacaoComponentPag = http = ', http);

     //se apontar para localhost dá pala qdo chamando de fora de outra máquina
     http.get('http://10.224.126.253:3001/sgp/astec/orcamento/nomeacao')
      .map((res:Response) => res.json())
      .subscribe(
        data => { 
          this.result = data;
          // console.log('data = ', this.result);
        },
        err => console.error('ERROR = ', err),
        () => console.log('done')
      );
  }
}
