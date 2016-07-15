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
var concurso_remocao_model_1 = require('./concurso-remocao-model');
var router_1 = require('@angular/router');
var concurso_remocao_service_1 = require('../../services/concurso-remocao-service');
var concursoRemocao_1 = require('./concursoRemocao');
var ConcursoRemocaoDetailComponente = (function () {
    function ConcursoRemocaoDetailComponente(http, params, _router, mainService, impactoInicial) {
        this.http = http;
        this._router = _router;
        this.params = params;
        this.mainService = mainService;
        this.impactoInicial = impactoInicial;
        console.log('ConcursoRemocaoDetailComponente this.params = ', this.params);
    }
    ConcursoRemocaoDetailComponente.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.params.getParam('numeroVaga');
        console.log('ConcursoRemocaoDetailComponente numeroVaga = ', id);
        this.mainService
            .getConcursoRemocaoPorVaga(id)
            .subscribe(function (data) {
            _this.obj = data[0];
        }, function (error) { return console.error(error); });
    };
    ConcursoRemocaoDetailComponente.prototype.gotoList = function () {
        this.concursoRemocaoModel = new concurso_remocao_model_1.default();
        this.concursoRemocaoModel.page = this.params.parameters['page'];
        this.concursoRemocaoModel.dataInicial = this.params.parameters['dataInicial'];
        this.concursoRemocaoModel.dataFinal = this.params.parameters['dataFinal'];
        var link = ['/RemocaoComponente', this.concursoRemocaoModel];
        this._router.navigate(link);
    };
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', concurso_remocao_service_1.ConcursoRemocao)
    ], ConcursoRemocaoDetailComponente.prototype, "obj", void 0);
    ConcursoRemocaoDetailComponente = __decorate([
        core_1.Component({
            selector: 'orc-nomeacao-paginator-page',
            template: require('./concursoRemocao-detail.html'),
            providers: [concursoRemocao_1.default]
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.RouteSegment, router_1.Router, concurso_remocao_service_1.ConcursoRemocaoService, concursoRemocao_1.default])
    ], ConcursoRemocaoDetailComponente);
    return ConcursoRemocaoDetailComponente;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConcursoRemocaoDetailComponente;
//# sourceMappingURL=concursoRemocao-detail.js.map