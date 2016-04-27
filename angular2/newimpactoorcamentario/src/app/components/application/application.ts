import {Component} from 'angular2/core';
// import {RouteConfig, RouterOutlet} from 'angular2/router';
import {Route, RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import HomeComponent from '../home/home';
import HomeForm from '../homeForm/homeForm';
import NomeacaoComponent from '../nomeacao/nomeacao';
import NomeacaoComponentPag from '../nomeacaoPaging/nomepaging';
import HomeFormNew from '../homeFormNew/homeForm2';
import NomeacaoComponentDetail from '../nomeacaodetail/nomeacaodetail';


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
  selector: 'orc-application',
  template: require('./application.html'),
  // directives: [ROUTER_DIRECTIVES]
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  new Route( {path: '/', component: HomeComponent, name: 'Home'}),
  new Route( {path: '/HomeForm', component: HomeForm, name: 'HomeForm'}),
  new Route( {path: '/Nomeacao', component: NomeacaoComponent, name: 'Nomeacao'}),
  new Route( {path: '/NomeacaoPaging', component: NomeacaoComponentPag, name: 'NomeacaoPaging'}),
  new Route( {path: '/HomeFormNew', component: HomeFormNew, name: 'HomeFormNew'}),
  new Route( {path: '/NomeacaoDetail/:vaga', component: NomeacaoComponentDetail, name: 'NomeacaoDetail'})
])
// @RouteConfig([
//   new Route({ path: '/',      component: Home,  name: 'Home'}),
//   new Route({ path: '/about', component: About, name: 'About'})
// ])
export default class ApplicationComponent {}
