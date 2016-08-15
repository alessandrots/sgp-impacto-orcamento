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
var Impacto = (function () {
    function Impacto(edital, ramo, uf, cargo, cargoDescricao, nome, port, nomeacaoData, dataExercicio, vaga, origemVaga, desprovimento, leiVaga, dataPortariaSemEfeito, numeroPortariaSemEfeito, field16) {
        this.edital = edital;
        this.ramo = ramo;
        this.uf = uf;
        this.cargo = cargo;
        this.cargoDescricao = cargoDescricao;
        this.nome = nome;
        this.port = port;
        this.nomeacaoData = nomeacaoData;
        this.dataExercicio = dataExercicio;
        this.vaga = vaga;
        this.origemVaga = origemVaga;
        this.desprovimento = desprovimento;
        this.leiVaga = leiVaga;
        this.dataPortariaSemEfeito = dataPortariaSemEfeito;
        this.numeroPortariaSemEfeito = numeroPortariaSemEfeito;
        this.field16 = field16;
        console.log(' Model Impacto...');
    }
    return Impacto;
}());
exports.Impacto = Impacto;
var OrcamentoService = (function () {
    function OrcamentoService(http) {
        this.http = http;
        this.searchEvent = new core_1.EventEmitter();
    }
    OrcamentoService.prototype.getImpactoById = function (vaga) {
        console.log('service ::: getImpactoById ==> vaga = ', vaga);
        return this.http.get('http://10.224.123.136:3001/sgp/astec/orcamento/nomeacao/detalhe/' + vaga)
            .map(function (response) { return response.json(); });
    };
    OrcamentoService.prototype.getAllImpacto = function () {
        console.log('service ::: getAllImpacto ==>  ');
        return this.http.get('http://10.224.123.136:3001/sgp/astec/orcamento/nomeacao')
            .map(function (response) { return response.json(); });
    };
    OrcamentoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrcamentoService);
    return OrcamentoService;
}());
exports.OrcamentoService = OrcamentoService;
function encodeParams(params) {
    return Object.keys(params)
        .filter(function (key) { return params[key]; })
        .reduce(function (accum, key) {
        accum.append(key, params[key]);
        return accum;
    }, new http_1.URLSearchParams());
}
//# sourceMappingURL=orcamento-service.js.map