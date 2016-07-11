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
var Concursado = (function () {
    function Concursado(inscricao, numeroEdital, ufNomeacao, cargo, cargoDescricao, nome, numeroPortaria, dataNomeacao, dataExercicio, numeroVaga, origemVaga, dataDesprovimento, leiVaga) {
        this.inscricao = inscricao;
        this.numeroEdital = numeroEdital;
        this.ufNomeacao = ufNomeacao;
        this.cargo = cargo;
        this.cargoDescricao = cargoDescricao;
        this.nome = nome;
        this.numeroPortaria = numeroPortaria;
        this.dataNomeacao = dataNomeacao;
        this.dataExercicio = dataExercicio;
        this.numeroVaga = numeroVaga;
        this.origemVaga = origemVaga;
        this.dataDesprovimento = dataDesprovimento;
        this.leiVaga = leiVaga;
        console.log(' Model Concursado...');
    }
    return Concursado;
}());
exports.Concursado = Concursado;
var ConcursadoService = (function () {
    function ConcursadoService(http) {
        this.http = http;
        this.searchEvent = new core_1.EventEmitter();
    }
    ConcursadoService.prototype.search = function (params) {
        console.log('ConcursadoService ==> search = ', params);
        return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursadoService/getConcursadoPorDatas?dataInicial=01/01/2015&dataFinal=31/05/2015')
            .map(function (response) { return response.json(); });
    };
    ConcursadoService.prototype.getAllConcursados = function () {
        console.log('service ::: getAllConcursadoEntredatas ==>  ');
        return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursadoService/getAllConcursados')
            .map(function (response) { return response.json(); });
    };
    ConcursadoService.prototype.getConcursadosPorDatas = function (dataInicial, dataFinal) {
        console.log('service ::: getConcursadosPorDatas ==> dataInicial= ', dataInicial + ' dataFinal= ', dataFinal);
        return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursadoService/getConcursadoPorDatas?dataInicial=' + dataInicial + '&dataFinal=' + dataFinal)
            .map(function (response) { return response.json(); });
    };
    ConcursadoService.prototype.getConcursadoPorId = function (inscricao) {
        console.log('service ::: getConcursadoPorId ==>  ', inscricao);
        return this.http.get('http://10.224.123.134:8080/impactorcamentosgpmpu/ns/rest/concursadoService/recuperarNomeacaoPorInscricao/' + inscricao)
            .map(function (response) { return response.json(); });
    };
    ConcursadoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ConcursadoService);
    return ConcursadoService;
}());
exports.ConcursadoService = ConcursadoService;
function encodeParams(params) {
    return Object.keys(params)
        .filter(function (key) { return params[key]; })
        .reduce(function (accum, key) {
        accum.append(key, params[key]);
        return accum;
    }, new http_1.URLSearchParams());
}
//# sourceMappingURL=concursado-service.js.map