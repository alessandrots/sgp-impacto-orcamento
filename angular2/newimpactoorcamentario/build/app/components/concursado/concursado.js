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
var concursado_service_1 = require('../../services/concursado-service');
var rxjs_1 = require('rxjs');
var ConcursadoComponente = (function () {
    function ConcursadoComponente(http, _router, mainService) {
        var _this = this;
        this._router = _router;
        this.resultAll = [];
        this.p = 1;
        var me = this;
        mainService
            .getAllConcursados()
            .subscribe(function (data) {
            _this.resultAll = data;
            _this.total = data.length;
            me.getPage(1);
        }, function (error) { return console.error(error); });
    }
    ConcursadoComponente.prototype.serverCall = function (meals, page) {
        var perPage = 10;
        var start = (page - 1) * perPage;
        var end = start + perPage;
        return rxjs_1.Observable
            .of({
            items: meals.slice(start, end),
            total: meals.length
        });
    };
    ConcursadoComponente.prototype.getPage = function (page) {
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
    ConcursadoComponente.prototype.gotoDetail = function (hero) {
        console.log('ConcursadoComponente ==> ConcursadoModel = ', hero);
        var link = ['/ConcursadoDetailComponente', hero.inscricao];
        this._router.navigate(link);
    };
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', Array)
    ], ConcursadoComponente.prototype, "resultAll", void 0);
    ConcursadoComponente = __decorate([
        core_1.Component({
            selector: 'orc-nomeacao-paginator-page',
            directives: [
                common_1.NgFor,
                ng2_pagination_1.PaginationControlsCmp
            ],
            pipes: [ng2_pagination_1.PaginatePipe],
            providers: [ng2_pagination_1.PaginationService],
            template: require('./concursado.html')
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, concursado_service_1.ConcursadoService])
    ], ConcursadoComponente);
    return ConcursadoComponente;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConcursadoComponente;
//# sourceMappingURL=concursado.js.map