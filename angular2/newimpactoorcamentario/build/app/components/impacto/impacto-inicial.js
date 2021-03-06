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
var common_2 = require('@angular/common');
var http_1 = require('@angular/http');
var ng2_pagination_1 = require('../../../../node_modules/ng2-pagination');
var router_1 = require('@angular/router');
var concurso_remocao_service_1 = require('../../services/concurso-remocao-service');
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
        var me = this, dataArr;
        console.log('data_ = ', data_);
        if (data_) {
            dataArr = data_.split(' ');
            console.log('ImpactoInicialComponente data = ', dataArr[0].split('/').join(''));
            var link = ['/RemocaoComponente', dataArr[0]];
            this._router.navigate(link);
        }
    };
    ImpactoInicialComponente.prototype.mySubmitText = function (event, dtIni, dtFim) {
        var me = this, dataArr;
        console.log('event = ', event);
        console.log('dataInicial  = ', this.parseDateString(dtIni.value));
        console.log('dataFinal    = ', this.parseDateString(dtFim.value));
    };
    ImpactoInicialComponente.prototype.parseDateString = function (date) {
        console.log('date    = ', date);
        var parts = date.split('-'), timeParts;
        if (parts.indexOf(':') != -1) {
            timeParts = parts[3].split(':');
        }
        return new Date(parts[0], parts[1] - 1, parts[2], 0, 0);
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
            template: require('./impacto-inicial2.html')
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, concurso_remocao_service_1.ConcursoRemocaoService])
    ], ImpactoInicialComponente);
    return ImpactoInicialComponente;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImpactoInicialComponente;
//# sourceMappingURL=impacto-inicial.js.map