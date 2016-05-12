import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Observable} from "rxjs/Observable";

// import {Product, ProductService} from '../../services/product-service';


@Component({
  selector: 'orc-home-page',
  providers: [],
  directives: [
    NgFor
  ],
  // styles: [require('./home.css')],
  template: require('./home.html')

})
export default class HomeComponent {
  // products: Observable<Product[]>;

  constructor() {
    console.log('HomeComponent ALESSANDROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
  }
}
