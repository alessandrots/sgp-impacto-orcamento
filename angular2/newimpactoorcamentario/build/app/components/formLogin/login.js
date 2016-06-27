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
function ssnValidator(control) {
    var value = control.value || '';
    var valid = value.match(/^\d{3}$/);
    return valid ? null : { ssn: true };
}
function equalValidator(_a) {
    var value = _a.value;
    var _b = Object.keys(value || {}), first = _b[0], rest = _b.slice(1);
    var valid = rest.every(function (v) { return value[v] === value[first]; });
    return valid ? null : { equal: true };
}
var LoginComponent = (function () {
    function LoginComponent() {
        this.submitted = false;
        var fb = new common_1.FormBuilder();
        this.formModel = fb.group({
            'username': ['', common_1.Validators.required],
            'ssn': ['', ssnValidator],
            'passwordsGroup': fb.group({
                'password': ['', common_1.Validators.minLength(5)],
                'pconfirm': ['']
            }, { validator: equalValidator })
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        if (this.formModel.valid) {
            console.log('this.formModel = ', this.formModel);
            this.submitted = true;
            console.log('this.formModel = ', this.formModel.value);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [common_1.FORM_DIRECTIVES],
            template: require('./login.html')
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginComponent;
//# sourceMappingURL=login.js.map