import {Component, Input, OnInit } from 'angular2/core';
import {Observable} from "rxjs/Observable";
import {Http, Response} from 'angular2/http';
import Nomeacao from '../nomeacao/nomeacaoModel';
import { RouteParams } from 'angular2/router';
import {Impacto, OrcamentoService} from '../../services/orcamento-service';
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
  orcService: OrcamentoService;

  constructor(private http: Http, private _routeParams: RouteParams, orcService: OrcamentoService) {
    console.log('NomeacaoDetail http = ', http);
    this.orcService = orcService;
    
  }

  ngOnInit() {
    let id = +this._routeParams.get('vaga');
    console.log('id vaga = ', id);

    //SUBSTITUINDO por chamada ao serviço
    this.orcService
      .getImpactoById(id)
      .subscribe(
        data => {
          this.obj = data;
          console.log('DATA = ', this.obj)
        },
        error => console.error(error));
  }

}
