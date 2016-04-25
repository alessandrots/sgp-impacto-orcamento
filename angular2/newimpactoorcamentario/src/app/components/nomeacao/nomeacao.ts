import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Observable} from "rxjs/Observable";
import {Http, Response} from 'angular2/http';
import Nomeacao from './nomeacaoModel';

// import {Product, ProductService} from '../../services/product-service';


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
  // products: Observable<Product[]>;
  result: Nomeacao[];

  constructor(http: Http) {
    console.log('Nomeacao http = ', http);

     //se apontar para localhost dá pala qdo chamando de fora de outra máquina
     http.get('/sgp/astec/orcamento/nomeacao')
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
