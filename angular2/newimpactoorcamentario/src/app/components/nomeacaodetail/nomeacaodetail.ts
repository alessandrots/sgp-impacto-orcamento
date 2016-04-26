import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Observable} from "rxjs/Observable";
import {Http, Response} from 'angular2/http';
import Nomeacao from '../nomeacao/nomeacaoModel';

// import {Product, ProductService} from '../../services/product-service';


@Component({
  selector: 'orc-nomeacao-page',
  providers: [],
  directives: [
    NgFor
  ],
  // styles: [require('./home.css')],
  template: require('./nomeacaodetail.html')

})
export default class NomeacaoComponentDetail {
  // products: Observable<Product[]>;
  result: Nomeacao[];


  // constructor(
  //     params: RouteParams,
  //     productService: ProductService,
  //     private bidService: BidService) {

  //   const productId = parseInt(params.get('productId'));

  //   productService
  //     .getProductById(productId)
  //     .subscribe(
  //       product => {
  //         this.product = product;
  //         this.currentBid = product.price;
  //       },
  //       error => console.error(error));

  //   productService
  //     .getReviewsForProduct(productId)
  //     .subscribe(
  //       reviews => this.reviews = reviews,
  //       error => console.error(error));
  // }

  constructor(http: Http) {
    console.log('Nomeacao http = ', http);

     //se apontar para localhost dá pala qdo chamando de fora de outra máquina
     http.get('/sgp/astec/orcamento/nomeacao/detalhe/1')
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
