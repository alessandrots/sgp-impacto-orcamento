"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var load_page_1 = require('../loading/load-page');
var common_2 = require('@angular/common');
var ConcursadoComponente = (function (_super) {
    __extends(ConcursadoComponente, _super);
    function ConcursadoComponente(http, _router, mainService, params) {
        _super.call(this, true);
        this._router = _router;
        this.resultAll = [];
        this.p = 1;
        var me = this;
        me.mainService = mainService;
        var fb = new common_2.FormBuilder();
        this.params = params;
        this.formModel = fb.group({
            'dataInicial': [null, common_2.Validators.required],
            'dataFinal': [null, common_2.Validators.required]
        });
    }
    ConcursadoComponente.prototype.ngOnInit = function () {
        var me = this;
        if (this.params) {
            console.log('ConcursoRemocaoComponente ngOnInit this.params = ', this.params.parameters);
        }
        this.onSearch();
    };
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
        this.result = this.serverCall(this.resultAll, page)
            .do(function (res) {
            _this.total = res.total;
            _this.p = page;
            _this.loading = false;
        })
            .map(function (res) { return res.items; });
    };
    ConcursadoComponente.prototype.gotoDetail = function (hero) {
        hero.page = this.p;
        hero.dataInicial = this.formModel._value.dataInicial;
        hero.dataFinal = this.formModel._value.dataFinal;
        var link = ['/ConcursadoDetailComponenteX', hero];
        this._router.navigate(link);
    };
    ConcursadoComponente.prototype.onSearch = function () {
        var _this = this;
        var me = this;
        console.log('this.params -->  = ', this.params);
        console.log('this.formModel = ', this.formModel.value);
        if (this.formModel.valid) {
            me.standby();
            this.mainService
                .getConcursadosPorDatas(this.formModel._value.dataInicial, this.formModel._value.dataFinal)
                .subscribe(function (data) {
                _this.resultAll = data;
                _this.total = data.length;
                me.getPage(1);
                me.ready();
            }, function (error) { return console.error(error); });
        }
        else if (this.params && (this.params.parameters['dataInicial'] &&
            this.params.parameters['dataFinal'])) {
            me.standby();
            this.dataInicial = this.params.parameters['dataInicial'];
            this.dataFinal = this.params.parameters['dataFinal'];
            this.mainService
                .getConcursadosPorDatas(this.dataInicial, this.dataFinal)
                .subscribe(function (data) {
                _this.resultAll = data;
                _this.total = data.length;
                me.getPage(1);
                me.ready();
            }, function (error) { return console.error(error); });
        }
        else {
            me.ready();
        }
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
                ng2_pagination_1.PaginationControlsCmp,
                load_page_1.LoadingIndicator
            ],
            pipes: [ng2_pagination_1.PaginatePipe],
            providers: [ng2_pagination_1.PaginationService],
            template: require('./concursado.html')
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, concursado_service_1.ConcursadoService, router_1.RouteSegment])
    ], ConcursadoComponente);
    return ConcursadoComponente;
}(load_page_1.LoadingPage));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConcursadoComponente;
//# sourceMappingURL=concursado.js.map