import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
// import HomeComponent from '../home/home';
// import NavbarComponent from '../navbar/navbar';
// import FooterComponent from '../footer/footer';
// import SearchComponent from '../search/search';
// import ProductDetailComponent from '../product-detail/product-detail';

// declare var require: any;//http://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require/31263434#31263434
/**
 é importante ter essa linha acima para funcionar o require na linha abaixo no template

 entretanto se tiver a pasta typings_custom (angular2.d.ts, jquery.d.ts e webpack.d.ts) não é necessário
*/

@Component({
  selector: 'auction-application',
  template: require('./application.html')//,não encontrou o require
  // directives: [
  //   RouterOutlet,
  //   NavbarComponent,
  //   FooterComponent,
  //   SearchComponent,
  //   HomeComponent
  // ]
})
@RouteConfig([
  // {path: '/', component: HomeComponent, as: 'Home'},
  // {path: '/products/:productId', component: ProductDetailComponent, as: 'ProductDetail'}
])
export default class ApplicationComponent {}
