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
var common_1 = require('@angular/common');
var ImpactoInicialComponente2 = (function () {
    function ImpactoInicialComponente2(http, _router, mainService) {
        this._router = _router;
        var me = this;
        me.mainService = mainService;
        var fb = new common_1.FormBuilder();
        this.formModel = fb.group({
            'dataInicial': [null, common_1.Validators.required],
            'dataFinal': [null, common_1.Validators.required]
        });
    }
    ImpactoInicialComponente2.prototype.onSearch = function () {
        if (this.formModel.valid) {
            console.log('this.formModel = ', this.formModel);
        }
    };
    ImpactoInicialComponente2 = __decorate([
        core_1.Component({
            selector: 'orc-impacto-inicial-page',
            providers: [common_1.FORM_PROVIDERS],
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            template: require('./impacto-inicial.html')
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, concurso_remocao_service_1.ConcursoRemocaoService])
    ], ImpactoInicialComponente2);
    return ImpactoInicialComponente2;
}());
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