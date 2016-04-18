import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Observable} from "rxjs/Observable";

import {Product, ProductService} from '../../services/product-service';
import CarouselComponent from '../carousel/carousel';
import ProductItemComponent from '../product-item/product-item';


@Component({
  selector: 'auction-home-page',
  providers: [],
  directives: [
    NgFor,
    CarouselComponent,
    ProductItemComponent
  ],
  styles: [require('./home.css')],
  template: require('./home.html')
  
})
export default class HomeComponent {
  products: Observable<Product[]>;

  constructor(private productService: ProductService) {
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx');
    this.products = this.productService.getProducts();

    this.productService.searchEvent
      .subscribe(
        params => this.products = this.productService.search(params),
        console.error.bind(console),
        () => console.log('DONE')
      );
  }
}
