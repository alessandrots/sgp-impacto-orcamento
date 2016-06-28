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
var ConcursoRemocao = (function () {
    function ConcursoRemocao(numeroVaga, cargoDescricao, ramoOrigem, ufOrigem, unidadeOrigem, ramoDestino, ufDestino, unidadeDestino, lei, motivo, ultimoOcupante, dataRemocaoGravacao, totalRemocao) {
        this.numeroVaga = numeroVaga;
        this.cargoDescricao = cargoDescricao;
        this.ramoOrigem = ramoOrigem;
        this.ufOrigem = ufOrigem;
        this.unidadeOrigem = unidadeOrigem;
        this.ramoDestino = ramoDestino;
        this.ufDestino = ufDestino;
        this.unidadeDestino = unidadeDestino;
        this.lei = lei;
        this.motivo = motivo;
        this.ultimoOcupante = ultimoOcupante;
        this.dataRemocaoGravacao = dataRemocaoGravacao;
        this.totalRemocao = totalRemocao;
        console.log(' Model ConcursoRemocao...');
    }
    return ConcursoRemocao;
}());
exports.ConcursoRemocao = ConcursoRemocao;
var ConcursoRemocaoService = (function () {
    function ConcursoRemocaoService(http) {
        this.http = http;
        this.searchEvent = new core_1.EventEmitter();
        this.urlBase = 'http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/';
    }
    ConcursoRemocaoService.prototype.getAllConcursoRemocaoPorDatas = function (data) {
        console.log('service ::: getAllConcursoRemocaoEntredatas ==>  ');
        return this.http.get(this.urlBase + 'getRemocoesPorDatas?dataMaxima=' + data)
            .map(function (response) { return response.json(); });
    };
    ConcursoRemocaoService.prototype.getConcursoRemocaoPorVaga = function (vaga) {
        console.log('service ::: getConcursoRemocaoPorVaga ==>  ');
        return this.http.get(this.urlBase + 'recuperarRemocoesPorVaga/' + vaga)
            .map(function (response) { return response.json(); });
    };
    ConcursoRemocaoService.prototype.getDatasRemocoes = function () {
        console.log('service ::: getDatasRemocoes ==>  ');
        return this.http.get(this.urlBase + 'recuperarDatasRemocoes')
            .map(function (response) { return response.json(); });
    };
    ConcursoRemocaoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ConcursoRemocaoService);
    return ConcursoRemocaoService;
}());
exports.ConcursoRemocaoService = ConcursoRemocaoService;
function encodeParams(params) {
    return Object.keys(params)
        .filter(function (key) { return params[key]; })
        .reduce(function (accum, key) {
        accum.append(key, params[key]);
        return accum;
    }, new http_1.URLSearchParams());
}
//# sourceMappingURL=concurso-remocao-service.js.map