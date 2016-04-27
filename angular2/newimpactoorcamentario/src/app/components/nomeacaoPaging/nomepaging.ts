import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Observable} from "rxjs/Observable";
import {Http, Response} from 'angular2/http';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from '../../../../node_modules/ng2-pagination';
import NomeacaoPag from './nomeModelPag';
import { Router } from 'angular2/router';
import {Impacto, OrcamentoService} from '../../services/orcamento-service';

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
  impacto: Impacto;

  constructor(http: Http,  private _router: Router, orcService: OrcamentoService) {
    console.log('NomeacaotPaging _router = ', _router);
    console.log('NomeacaotPaging http = ', http);

    // const id = parseInt(params.get('vaga'));

     //se apontar para localhost dá pala qdo chamando de fora de outra máquina
    //  http.get('http://10.224.126.253:3001/sgp/astec/orcamento/nomeacao')
     // http.get('/sgp/astec/orcamento/nomeacao')
     //  .map((res:Response) => res.json())
     //  .subscribe(
     //    data => {
     //      this.result = data;
     //    },
     //    err => console.error('ERROR = ', err),
     //    () => console.log('done')
     //  );

      //SUBSTITUINDO por chamada ao serviço
      orcService
      .getAllImpacto()
      .subscribe(
        data => {
          this.result = data;
          // console.error('DATA = ', this.result)
        },
        error => console.error(error));
  }

  gotoDetail(hero: NomeacaoPag) {
    console.log('hero.vaga = ', hero.vaga);
    let link = ['NomeacaoDetail', { vaga: hero.vaga }];
    this._router.navigate(link);
  }
}

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