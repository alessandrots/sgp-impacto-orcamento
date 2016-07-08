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
require('rxjs/add/operator/map');
var ImpactoService = (function () {
    function ImpactoService(http) {
        this.http = http;
        this.searchEvent = new core_1.EventEmitter();
    }
    ImpactoService.prototype.search = function (params) {
        console.log('ConcursadoService ==> search = ', params);
        return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursadoService/getConcursadoPorDatas?dataInicial=01/01/2015&dataFinal=31/05/2015')
            .map(function (response) { return response.json(); });
    };
    ImpactoService.prototype.getImpactoPorDatas = function (dataInicial, dataFinal) {
        console.log('service ::: getImpactoPorDatas ==> dataInicial= ', dataInicial + ' dataFinal= ', dataFinal);
        return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/impactoOrcamentoService/realizarImpactoRemocaoComConcursadosEntreDatas?dataInicial=' + dataInicial + '&dataFinal=' + dataFinal)
            .map(function (response) { return response.json(); });
    };
    ImpactoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ImpactoService);
    return ImpactoService;
}());
exports.ImpactoService = ImpactoService;
function encodeParams(params) {
    return Object.keys(params)
        .filter(function (key) { return params[key]; })
        .reduce(function (accum, key) {
        accum.append(key, params[key]);
        return accum;
    }, new http_1.URLSearchParams());
}
//# sourceMappingURL=impacto-service.js.map