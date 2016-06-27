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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var common_2 = require('@angular/common');
var http_1 = require('@angular/http');
var ng2_pagination_1 = require('../../../../node_modules/ng2-pagination');
var router_2 = require('@angular/router');
var concurso_remocao_service_1 = require('../../services/concurso-remocao-service');
var concursoRemocao_1 = require('../concursoRemocao/concursoRemocao');
var rxjs_1 = require('rxjs');
var ImpactoInicialComponente = (function () {
    function ImpactoInicialComponente(http, _router, mainService) {
        var _this = this;
        this._router = _router;
        this.resultAll = [];
        this.p = 1;
        var me = this;
        me.mainService = mainService;
        var fb = new common_1.FormBuilder();
        mainService
            .getDatasRemocoes()
            .subscribe(function (data) {
            _this.resultAll = data;
            _this.total = data.length;
            me.getPage(1);
        }, function (error) { return console.error(error); });
    }
    ImpactoInicialComponente.prototype.serverCall = function (meals, page) {
        var perPage = 10;
        var start = (page - 1) * perPage;
        var end = start + perPage;
        return rxjs_1.Observable
            .of({
            items: meals.slice(start, end),
            total: meals.length
        });
    };
    ImpactoInicialComponente.prototype.getPage = function (page) {
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
    ImpactoInicialComponente.prototype.gotoDetail = function () {
    };
    ImpactoInicialComponente.prototype.mySubmit = function (data_) {
        var me = this, data;
        console.log('data_ = ', data_);
        if (data_) {
            data = data_.split(' ');
            console.log('ImpactoInicialComponente data = ', data);
            var link = ['/RemocaoComponente', data[0]];
            this._router.navigate(link);
        }
    };
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', Array)
    ], ImpactoInicialComponente.prototype, "resultAll", void 0);
    ImpactoInicialComponente = __decorate([
        core_1.Component({
            selector: 'orc-impacto-inicial-page',
            directives: [
                common_2.NgFor,
                ng2_pagination_1.PaginationControlsCmp,
                common_1.FORM_DIRECTIVES
            ],
            pipes: [ng2_pagination_1.PaginatePipe],
            providers: [ng2_pagination_1.PaginationService],
            template: require('./impacto-inicial.html')
        }),
        router_1.Routes([
            { path: '/RemocaoComponente/:data', component: concursoRemocao_1.default }
        ]), 
        __metadata('design:paramtypes', [http_1.Http, router_2.Router, concurso_remocao_service_1.ConcursoRemocaoService])
    ], ImpactoInicialComponente);
    return ImpactoInicialComponente;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImpactoInicialComponente;
//# sourceMappingURL=impacto-inicial.js.map