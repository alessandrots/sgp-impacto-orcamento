"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var application_1 = require('./app/components/application/application');
var home_1 = require('./app/components/home/home');
var homeForm_1 = require('./app/components/homeForm/homeForm');
var nomeacao_1 = require('./app/components/nomeacao/nomeacao');
var nomepaging_1 = require('./app/components/nomeacaoPaging/nomepaging');
var homeForm2_1 = require('./app/components/homeFormNew/homeForm2');
var nomeacaodetail_1 = require('./app/components/nomeacaodetail/nomeacaodetail');
var nomepaging_2 = require('./app/components/nomeacaoPagingComplete/nomepaging');
var login_1 = require('./app/components/formLogin/login');
var concursado_1 = require('./app/components/concursado/concursado');
var concursado_detail_1 = require('./app/components/concursado/concursado-detail');
var concursoRemocao_1 = require('./app/components/concursoRemocao/concursoRemocao');
var concursoRemocao_detail_1 = require('./app/components/concursoRemocao/concursoRemocao-detail');
var impacto_inicial_1 = require('./app/components/impacto/impacto-inicial');
var impacto_inicial_2 = require('./app/components/impacto2/impacto-inicial');
var impacto_detail_1 = require('./app/components/impacto2/impacto-detail');
var services_1 = require('./app/services/services');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    { path: '/', component: home_1.default },
                    { path: '/HomeForm', component: homeForm_1.default },
                    { path: '/Nomeacao', component: nomeacao_1.default },
                    { path: '/NomeacaoPaging', component: nomepaging_1.default },
                    { path: '/HomeFormNew', component: homeForm2_1.default },
                    { path: '/NomeacaoDetail/:vaga', component: nomeacaodetail_1.default },
                    { path: '/NomeacaoPagingAll', component: nomepaging_2.default },
                    { path: '/Login', component: login_1.default },
                    { path: '/ConcursadoComponente', component: concursado_1.default },
                    { path: '/ConcursadoDetailComponente/:inscricao', component: concursado_detail_1.default },
                    { path: '/ConcursadoDetailComponenteX', component: concursado_detail_1.default },
                    { path: '/RemocaoComponente', component: concursoRemocao_1.default },
                    { path: '/ConcursoRemocaoDetailComponente/:numeroVaga', component: concursoRemocao_detail_1.default },
                    { path: '/ConcursoRemocaoDetailComponenteX', component: concursoRemocao_detail_1.default },
                    { path: '/ImpactoInicialComponente', component: impacto_inicial_1.default },
                    { path: '/ImpactoInicialComponente2', component: impacto_inicial_2.default },
                    { path: '/ImpactoDetailComponente', component: impacto_detail_1.default }
                ])
            ],
            declarations: [
                application_1.default,
                home_1.default,
                homeForm_1.default,
                nomeacao_1.default,
                nomepaging_1.default,
                homeForm2_1.default,
                nomeacaodetail_1.default,
                nomepaging_2.default,
                login_1.default,
                concursado_1.default,
                concursado_detail_1.default,
                concursoRemocao_1.default,
                concursoRemocao_detail_1.default,
                impacto_inicial_1.default,
                impacto_inicial_2.default,
                impacto_detail_1.default
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ].concat(services_1.ONLINE_IMPACTO_SERVICES),
            bootstrap: [application_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=app.module.js.map