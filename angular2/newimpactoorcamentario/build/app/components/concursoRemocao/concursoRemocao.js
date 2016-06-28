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
var http_1 = require('@angular/http');
var ng2_pagination_1 = require('../../../../node_modules/ng2-pagination');
var router_1 = require('@angular/router');
var concurso_remocao_service_1 = require('../../services/concurso-remocao-service');
var rxjs_1 = require('rxjs');
var ConcursoRemocaoComponente = (function () {
    function ConcursoRemocaoComponente(http, _router, mainService, params) {
        this._router = _router;
        this.resultAll = [];
        this.p = 1;
        console.log('ConcursoRemocaoComponente Construtor');
        var me = this;
        this.params = params;
        this.mainService = mainService;
    }
    ConcursoRemocaoComponente.prototype.ngOnInit = function () {
        var _this = this;
        var me = this;
        var dia = this.params.getParam('dia');
        var mes = this.params.getParam('mes');
        var ano = this.params.getParam('ano');
        console.log('ConcursoRemocaoComponente dia = ', dia);
        console.log('ConcursoRemocaoComponente mes = ', mes);
        console.log('ConcursoRemocaoComponente ano = ', ano);
        this.mainService
            .getRemocoesPorDiaMesAno(dia, mes, ano)
            .subscribe(function (data) {
            _this.resultAll = data;
            _this.total = data.length;
            me.getPage(1);
        }, function (error) { return console.error(error); });
    };
    ConcursoRemocaoComponente.prototype.serverCall = function (meals, page) {
        var perPage = 10;
        var start = (page - 1) * perPage;
        var end = start + perPage;
        return rxjs_1.Observable
            .of({
            items: meals.slice(start, end),
            total: meals.length
        });
    };
    ConcursoRemocaoComponente.prototype.getPage = function (page) {
        var _this = this;
        this.loading = true;
        this.result = this.serverCall(this.resultAll, page)
            .do(function (res) {
            _this.total = res.total;
            _this.p = page;
            _this.loading = false;
        })
            .map(function (res) { return res.items; });
    };
    ConcursoRemocaoComponente.prototype.gotoDetail = function (hero) {
        console.log('ConcursoRemocaoComponente ==> inscricao = ', hero.numeroVaga);
        var link = ['/ConcursoRemocaoDetailComponente', hero.numeroVaga];
        this._router.navigate(link);
    };
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', Array)
    ], ConcursoRemocaoComponente.prototype, "resultAll", void 0);
    ConcursoRemocaoComponente = __decorate([
        core_1.Component({
            selector: 'orc-nomeacao-paginator-page',
            directives: [
                common_1.NgFor,
                ng2_pagination_1.PaginationControlsCmp
            ],
            pipes: [ng2_pagination_1.PaginatePipe],
            providers: [ng2_pagination_1.PaginationService],
            template: require('./concursoRemocao.html')
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, concurso_remocao_service_1.ConcursoRemocaoService, router_1.RouteSegment])
    ], ConcursoRemocaoComponente);
    return ConcursoRemocaoComponente;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConcursoRemocaoComponente;
//# sourceMappingURL=concursoRemocao.js.map