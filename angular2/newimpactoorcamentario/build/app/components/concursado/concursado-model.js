"use strict";
var ConcursadoModel = (function () {
    function ConcursadoModel(inscricao, numeroEdital, ufNomeacao, cargo, cargoDescricao, nome, numeroPortaria, dataNomeacao, dataExercicio, numeroVaga, origemVaga, dataDesprovimento, leiVaga, dataInicial, dataFinal, page) {
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
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
        this.page = page;
        console.log('ConcursadoModel Hero');
    }
    return ConcursadoModel;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConcursadoModel;
//# sourceMappingURL=concursado-model.js.map