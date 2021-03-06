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
var http_1 = require('@angular/http');
var concursado_model_1 = require('../concursado/concursado-model');
var router_1 = require('@angular/router');
var concursado_service_1 = require('../../services/concursado-service');
var impacto_inicial_1 = require('../impacto2/impacto-inicial');
var ImpactoDetailComponente = (function () {
    function ImpactoDetailComponente(http, params, _router, mainService, impactoInicial) {
        this.http = http;
        this._router = _router;
        this.params = params;
        this.mainService = mainService;
        this.impactoInicial = impactoInicial;
    }
    ImpactoDetailComponente.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.params.parameters['inscricao'];
        this.mainService
            .getConcursadoPorId(id)
            .subscribe(function (data) {
            _this.obj = data;
        }, function (error) { return console.error(error); });
    };
    ImpactoDetailComponente.prototype.gotoList = function () {
        this.page = this.params.parameters['page'];
        this.dataInicial = this.params.parameters['dataInicial'];
        this.dataFinal = this.params.parameters['dataFinal'];
        this.concursadoModel = new concursado_model_1.default(null, null, null, null, null, null, null, null, null, null, null, null, null, this.dataInicial, this.dataFinal, this.page);
        var link = ['/ImpactoInicialComponente2', this.concursadoModel];
        this._router.navigate(link);
    };
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', concursado_service_1.Concursado)
    ], ImpactoDetailComponente.prototype, "obj", void 0);
    ImpactoDetailComponente = __decorate([
        core_1.Component({
            selector: 'orc-nomeacao-paginator-page',
            template: require('./impacto-detail.html'),
            providers: [impacto_inicial_1.default]
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.RouteSegment, router_1.Router, concursado_service_1.ConcursadoService, impacto_inicial_1.default])
    ], ImpactoDetailComponente);
    return ImpactoDetailComponente;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImpactoDetailComponente;
//# sourceMappingURL=impacto-detail.js.map