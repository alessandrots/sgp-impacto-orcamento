import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {Directive, Component, Input} from '@angular/core';
import {Http, Response} from '@angular/http';
import ConcursadoModel from '../concursado/concursado-model';
import { Router } from '@angular/router';
import {Concursado, ConcursadoService} from '../../services/concursado-service';
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
  mainService: ConcursadoService;
  @Input('data') resultAll: ConcursadoModel[] = [];

  constructor(http: Http,  private _router: Router, mainService: ConcursadoService) {
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
      // this.mainService.searchEvent.emit(this.formModel.value);
      // console.log('this.formModel = ', this.formModel);
      this.mainService
        .getAllConcursadoEntredatas()
        .subscribe(
          data => {
            this.resultAll = data;
            // this.total = data.length;
            // me.getPage(1);
            /*
                Fazer a chamada para a funcao especifica,
                passando as datas como string.. via query path
                
            */
            console.log('this.resultAll = ', this.resultAll);
          },
          error => console.error(error));
      console.log('this.mainService.searchEvent = ', this.mainService.searchEvent);
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
