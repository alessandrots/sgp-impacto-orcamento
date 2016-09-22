import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


// import {Component} from '@angular/core';
// import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import ApplicationComponent from './app/components/application/application';
import HomeComponent from './app/components/home/home';
import HomeForm from './app/components/homeForm/homeForm';
import NomeacaoComponent from './app/components/nomeacao/nomeacao';
import NomeacaoComponentPag from './app/components/nomeacaoPaging/nomepaging';
import HomeFormNew from './app/components/homeFormNew/homeForm2';
import NomeacaoComponentDetail from './app/components/nomeacaodetail/nomeacaodetail';
import NomeacaoComponentPagAll from './app/components/nomeacaoPagingComplete/nomepaging';
import LoginComponent from './app/components/formLogin/login';
import ConcursadoComponente from './app/components/concursado/concursado';
import ConcursadoDetailComponente from './app/components/concursado/concursado-detail';
import ConcursoRemocaoComponente from './app/components/concursoRemocao/concursoRemocao';
import ConcursoRemocaoDetailComponente from './app/components/concursoRemocao/concursoRemocao-detail';
import ImpactoInicialComponente from './app/components/impacto/impacto-inicial';
import ImpactoInicialComponente2 from './app/components/impacto2/impacto-inicial';
import ImpactoDetailComponente from './app/components/impacto2/impacto-detail';
import {ONLINE_IMPACTO_SERVICES} from './app/services/services';





@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // {path: '',                    component: HomeComponent},
      // {path: 'products/:productId', component: ProductDetailComponent}
      {path: '/', component: HomeComponent},
      {path: '/HomeForm', component: HomeForm},
      {path: '/Nomeacao', component: NomeacaoComponent},
      {path: '/NomeacaoPaging', component: NomeacaoComponentPag},
      {path: '/HomeFormNew', component: HomeFormNew},
      {path: '/NomeacaoDetail/:vaga', component: NomeacaoComponentDetail},
      {path: '/NomeacaoPagingAll', component: NomeacaoComponentPagAll},
      {path: '/Login', component: LoginComponent},
      {path: '/ConcursadoComponente', component: ConcursadoComponente},
      {path: '/ConcursadoDetailComponente/:inscricao', component: ConcursadoDetailComponente},
      {path: '/ConcursadoDetailComponenteX', component: ConcursadoDetailComponente},
      {path: '/RemocaoComponente', component: ConcursoRemocaoComponente},
      {path: '/ConcursoRemocaoDetailComponente/:numeroVaga', component: ConcursoRemocaoDetailComponente},
      {path: '/ConcursoRemocaoDetailComponenteX', component: ConcursoRemocaoDetailComponente},
      {path: '/ImpactoInicialComponente', component: ImpactoInicialComponente},
      {path: '/ImpactoInicialComponente2', component: ImpactoInicialComponente2},
      {path: '/ImpactoDetailComponente', component: ImpactoDetailComponente}


    ])
  ],
  declarations: [
    ApplicationComponent,
    HomeComponent,
    HomeForm,
    NomeacaoComponent,
    NomeacaoComponentPag,
    HomeFormNew,
    NomeacaoComponentDetail,
    NomeacaoComponentPagAll,
    LoginComponent,
    ConcursadoComponente,
    ConcursadoDetailComponente,
    ConcursoRemocaoComponente,
    ConcursoRemocaoDetailComponente,
    ImpactoInicialComponente,
    ImpactoInicialComponente2,
    ImpactoDetailComponente
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ...ONLINE_IMPACTO_SERVICES
  ],
  bootstrap: [ ApplicationComponent ]
})
export default class AppModule {}
