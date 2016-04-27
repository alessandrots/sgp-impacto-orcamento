import {Component, Input, OnInit } from 'angular2/core';
// import {NgFor} from 'angular2/common';
import {Observable} from "rxjs/Observable";
import {Http, Response} from 'angular2/http';
import Nomeacao from '../nomeacao/nomeacaoModel';
import { RouteParams } from 'angular2/router';
// import NomeacaoComponentDetail from '../nomeacaodetail/nomeacaodetail';
// import {Product, ProductService} from '../../services/product-service';


@Component({
  selector: 'orc-nomeacao-page',
  providers: [],
  // styles: [require('./home.css')],
  template: require('./nomeacaodetail.html')

})
export default class NomeacaoComponentDetail implements OnInit {
  // products: Observable<Product[]>;
  // result: Nomeacao[];
  @Input() obj: Nomeacao;


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

  constructor(private http: Http, private _routeParams: RouteParams) {
    console.log('NomeacaoDetail http = ', http);
    
  }

  ngOnInit() {
    let id = +this._routeParams.get('vaga');

     //se apontar para localhost dá pala qdo chamando de fora de outra máquina
     this.http.get('/sgp/astec/orcamento/nomeacao/detalhe/1')
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          this.obj = data;
          console.log('NomeacaoDetail data = ', this.obj);
        },
        err => console.error('ERROR = ', err),
        () => console.log('done')
      );
  }

}
