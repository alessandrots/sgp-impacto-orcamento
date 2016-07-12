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
var router_1 = require('@angular/router');
var concurso_remocao_service_1 = require('../../services/concurso-remocao-service');
var ConcursoRemocaoDetailComponente = (function () {
    function ConcursoRemocaoDetailComponente(http, params, mainService) {
        this.http = http;
        this.params = params;
        this.mainService = mainService;
        console.log('ConcursoRemocaoDetailComponente this.params = ', this.params);
    }
    ConcursoRemocaoDetailComponente.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.params.getParam('numeroVaga');
        console.log('ConcursoRemocaoDetailComponente numeroVaga = ', id);
        this.mainService
            .getConcursoRemocaoPorVaga(id)
            .subscribe(function (data) {
            console.log('this.obj = ', _this.obj);
            _this.obj = data[0];
        }, function (error) { return console.error(error); });
    };
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', concurso_remocao_service_1.ConcursoRemocao)
    ], ConcursoRemocaoDetailComponente.prototype, "obj", void 0);
    ConcursoRemocaoDetailComponente = __decorate([
        core_1.Component({
            selector: 'orc-nomeacao-paginator-page',
            template: require('./concursoRemocao-detail.html')
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.RouteSegment, concurso_remocao_service_1.ConcursoRemocaoService])
    ], ConcursoRemocaoDetailComponente);
    return ConcursoRemocaoDetailComponente;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConcursoRemocaoDetailComponente;
//# sourceMappingURL=concursoRemocao-detail.js.map