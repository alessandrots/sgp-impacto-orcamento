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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var impacto_service_1 = require('../../services/impacto-service');
var rxjs_1 = require('rxjs');
var common_1 = require('@angular/common');
var ng2_pagination_1 = require('../../../../node_modules/ng2-pagination');
var load_page_1 = require('../loading/load-page');
var ImpactoInicialComponente2 = (function (_super) {
    __extends(ImpactoInicialComponente2, _super);
    function ImpactoInicialComponente2(http, _router, params, mainService) {
        _super.call(this, false);
        this._router = _router;
        this.resultAll = [];
        this.p = 1;
        var me = this;
        me.mainService = mainService;
        this.total = 0;
        this.params = params;
        var fb = new common_1.FormBuilder();
        this.formModel = fb.group({
            'dataInicial': [null, common_1.Validators.required],
            'dataFinal': [null, common_1.Validators.required]
        });
    }
    ImpactoInicialComponente2.prototype.ngOnInit = function () {
        if (this.params) {
            console.log('ImpactoInicialComponente2 ngOnInit this.params = ', this.params.parameters);
        }
        this.onSearch();
    };
    ImpactoInicialComponente2.prototype.onSearch = function () {
        var _this = this;
        var me = this;
        if (this.formModel.valid) {
            me.standby();
            this.mainService
                .getImpactoPorDatas(this.formModel._value.dataInicial, this.formModel._value.dataFinal)
                .subscribe(function (data) {
                _this.resultAll = data;
                _this.total = data.length;
                me.getPage(1);
                me.ready();
            }, function (error) { return console.error(error); });
            console.log('this.mainService.searchEvent = ', this.mainService.searchEvent);
        }
        else if (this.params.parameters['dataInicial'] &&
            this.params.parameters['dataFinal']) {
            me.standby();
            this.dataInicial = this.params.parameters['dataInicial'];
            this.dataFinal = this.params.parameters['dataFinal'];
            this.mainService
                .getImpactoPorDatas(this.params.parameters['dataInicial'], this.params.parameters['dataFinal'])
                .subscribe(function (data) {
                _this.resultAll = data;
                _this.total = data.length;
                me.getPage(_this.params.parameters['page']);
                me.ready();
            }, function (error) { return console.error(error); });
        }
        else {
            me.ready();
        }
    };
    ImpactoInicialComponente2.prototype.serverCall = function (meals, page) {
        var perPage = 10;
        var start = (page - 1) * perPage;
        var end = start + perPage;
        return rxjs_1.Observable
            .of({
            items: meals.slice(start, end),
            total: meals.length
        });
    };
    ImpactoInicialComponente2.prototype.getPage = function (page) {
        var _this = this;
        this.result = this.serverCall(this.resultAll, page)
            .do(function (res) {
            _this.total = res.total;
            _this.p = page;
            _this.loading = false;
        })
            .map(function (res) { return res.items; });
    };
    ImpactoInicialComponente2.prototype.gotoDetail = function (hero) {
        hero.page = this.p;
        hero.dataInicial = this.formModel._value.dataInicial;
        hero.dataFinal = this.formModel._value.dataFinal;
        var link = ['/ConcursadoDetailComponenteX', hero];
        this._router.navigate(link);
    };
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', Array)
    ], ImpactoInicialComponente2.prototype, "resultAll", void 0);
    ImpactoInicialComponente2 = __decorate([
        core_1.Component({
            selector: 'orc-impacto-inicial-page',
            providers: [common_1.FORM_PROVIDERS, ng2_pagination_1.PaginationService],
            directives: [common_1.CORE_DIRECTIVES,
                common_1.FORM_DIRECTIVES,
                common_1.NgFor,
                ng2_pagination_1.PaginationControlsCmp,
                load_page_1.LoadingIndicator],
            pipes: [ng2_pagination_1.PaginatePipe],
            template: require('./impacto-inicial.html')
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, router_1.RouteSegment, impacto_service_1.ImpactoService])
    ], ImpactoInicialComponente2);
    return ImpactoInicialComponente2;
}(load_page_1.LoadingPage));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImpactoInicialComponente2;
function positiveNumberValidator(control) {
    if (!control.value)
        return null;
    var price = parseInt(control.value);
    return price === null ||
        typeof price === 'number' &&
            price > 0 ? null : { positivenumber: true };
}
//# sourceMappingURL=impacto-inicial.js.map