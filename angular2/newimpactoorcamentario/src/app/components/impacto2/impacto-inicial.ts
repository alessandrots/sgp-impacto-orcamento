import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {Directive, Component, Input} from '@angular/core';
import {Http, Response} from '@angular/http';
import ConcursoRemocaoModel from '../concursoRemocao/concurso-remocao-model';
import { Router } from '@angular/router';
import {ConcursoRemocao, ConcursoRemocaoService} from '../../services/concurso-remocao-service';
import ConcursoRemocaoComponente from '../concursoRemocao/concursoRemocao';
import {Observable} from 'rxjs';
import {
  Control,
  ControlGroup,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FORM_PROVIDERS,
  FormBuilder,
  Validators
} from '@angular/common';

@Component({
  selector: 'orc-impacto-inicial-page',
  providers: [FORM_PROVIDERS],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: require('./impacto-inicial.html')
})

export default class ImpactoInicialComponente2 {

  formModel: ControlGroup;
  mainService: ConcursoRemocaoService;
  // categories: string[];

  constructor(http: Http,  private _router: Router, mainService: ConcursoRemocaoService) {
    // console.log('ConcursoRemocaoComponente Construtor');
    var me = this;
    // this.impacto = new ConcursoRemocaoModel();
    me.mainService = mainService;
    // this.categories = ['A','B','C','D'];

    const fb = new FormBuilder();
    this.formModel = fb.group({
      'dataInicial': [null, Validators.required],
      'dataFinal': [null, Validators.required]
    });
    // this.formModel = fb.group({
    //   'dataRemocaoGravacao': ['', Validators.required]
    // });

    //SUBSTITUINDO por chamada ao serviço
    // mainService
    //   .getDatasRemocoes()
    //   .subscribe(
    //     data => {
    //       this.resultAll = data;
    //       this.total = data.length;
    //       me.getPage(1);
    //     },
    //     error => console.error(error));
  }

  onSearch() {
    if (this.formModel.valid) {
      // this.productService.searchEvent.emit(this.formModel.value);
      console.log('this.formModel = ', this.formModel);
    }
  }

}

function positiveNumberValidator(control: Control): any {
  if (!control.value) return null;
  const price = parseInt(control.value);
  return price === null ||
    typeof price === 'number' &&
         price > 0 ? null : {positivenumber: true};
}
