import {Component} from '@angular/core';
// import {RouteConfig, RouterOutlet} from '@angular/router';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import HomeComponent from '../home/home';
import HomeForm from '../homeForm/homeForm';
import NomeacaoComponent from '../nomeacao/nomeacao';
import NomeacaoComponentPag from '../nomeacaoPaging/nomepaging';
import HomeFormNew from '../homeFormNew/homeForm2';
import NomeacaoComponentDetail from '../nomeacaodetail/nomeacaodetail';
import NomeacaoComponentPagAll from '../nomeacaoPagingComplete/nomepaging';
import LoginComponent from '../formLogin/login';
import ConcursadoComponente from '../concursado/concursado';
import ConcursoRemocaoComponente from '../concursoRemocao/concursoRemocao';

/**
 declare var require: any;//http://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require/31263434#31263434
 é importante ter essa linha acima para funcionar o require na linha abaixo no template
 **** ENTRETANTO se tiver a pasta typings_custom (@angular.d.ts, jquery.d.ts e webpack.d.ts) não é necessário
*/

@Component({
  selector: 'orc-application',
  template: require('./application.html'),
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
    {path: '/', component: HomeComponent},
    {path: '/HomeForm', component: HomeForm},
    {path: '/Nomeacao', component: NomeacaoComponent},
    {path: '/NomeacaoPaging', component: NomeacaoComponentPag},
    {path: '/HomeFormNew', component: HomeFormNew},
    {path: '/NomeacaoDetail/:vaga', component: NomeacaoComponentDetail},
    {path: '/NomeacaoPagingAll', component: NomeacaoComponentPagAll},
    {path: '/Login', component: LoginComponent},
    {path: '/ConcursadoComponente', component: ConcursadoComponente},
    {path: '/RemocaoComponente', component: ConcursoRemocaoComponente}
])

export default class ApplicationComponent {}
