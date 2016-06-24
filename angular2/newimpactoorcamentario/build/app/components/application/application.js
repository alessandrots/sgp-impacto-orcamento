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
var router_1 = require('@angular/router');
var home_1 = require('../home/home');
var homeForm_1 = require('../homeForm/homeForm');
var nomeacao_1 = require('../nomeacao/nomeacao');
var nomepaging_1 = require('../nomeacaoPaging/nomepaging');
var homeForm2_1 = require('../homeFormNew/homeForm2');
var nomeacaodetail_1 = require('../nomeacaodetail/nomeacaodetail');
var nomepaging_2 = require('../nomeacaoPagingComplete/nomepaging');
var login_1 = require('../formLogin/login');
var concursado_1 = require('../concursado/concursado');
var concursado_detail_1 = require('../concursado/concursado-detail');
var concursoRemocao_1 = require('../concursoRemocao/concursoRemocao');
var concursoRemocao_detail_1 = require('../concursoRemocao/concursoRemocao-detail');
var impacto_inicial_1 = require('../impacto/impacto-inicial');
var ApplicationComponent = (function () {
    function ApplicationComponent() {
    }
    ApplicationComponent = __decorate([
        core_1.Component({
            selector: 'orc-application',
            template: require('./application.html'),
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
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
            { path: '/RemocaoComponente', component: concursoRemocao_1.default },
            { path: '/ConcursoRemocaoDetailComponente/:numeroVaga', component: concursoRemocao_detail_1.default },
            { path: '/ImpactoInicialComponente', component: impacto_inicial_1.default }
        ]), 
        __metadata('design:paramtypes', [])
    ], ApplicationComponent);
    return ApplicationComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ApplicationComponent;
//# sourceMappingURL=application.js.map