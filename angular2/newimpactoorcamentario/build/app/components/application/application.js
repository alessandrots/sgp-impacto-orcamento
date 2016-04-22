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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var home_1 = require('../home/home');
var homeForm_1 = require('../homeForm/homeForm');
var nomeacao_1 = require('../nomeacao/nomeacao');
var nomepaging_1 = require('../nomeacaoPaging/nomepaging');
var ApplicationComponent = (function () {
    function ApplicationComponent() {
    }
    ApplicationComponent = __decorate([
        core_1.Component({
            selector: 'orc-application',
            template: require('./application.html'),
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: home_1.default, name: 'Home' }),
            new router_1.Route({ path: '/HomeForm', component: homeForm_1.default, name: 'HomeForm' }),
            new router_1.Route({ path: '/Nomeacao', component: nomeacao_1.default, name: 'Nomeacao' }),
            new router_1.Route({ path: '/NomeacaoPaging', component: nomepaging_1.default, name: 'NomeacaoPaging' })
        ]), 
        __metadata('design:paramtypes', [])
    ], ApplicationComponent);
    return ApplicationComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ApplicationComponent;
//# sourceMappingURL=application.js.map