import {bootstrap} from 'angular2/platform/browser';
import {Directive, Component} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder, FORM_DIRECTIVES} from 'angular2/common';

/**
 * Returns `true` if Control's value represents a valid SSN,
 * otherwise returns `false`.
 */
function ssnValidator(control: Control): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}

/**
 * Returns `true` if all Controls in the specified ControlGroup have exactly
 * the same value. Otherwise returns `false`.
 */
function equalValidator({value}: ControlGroup): {[key: string]: any} {
  const [first, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] === value[first]);
  return valid ? null : {equal: true};
}

@Component({
  selector: 'app',
  directives: [FORM_DIRECTIVES],
  template: require('./login.html')
})
export default class LoginComponent {
  formModel: ControlGroup;
  submitted = false;

  constructor() {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      'username': ['', Validators.required],
      'ssn': ['', ssnValidator],
      'passwordsGroup': fb.group({
        'password': ['', Validators.minLength(5)],
        'pconfirm': ['']
      }, {validator: equalValidator})
    });
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log('this.formModel = ', this.formModel);
      this.submitted = true; 
      console.log('this.formModel = ', this.formModel.value);
    }
  }
}

// bootstrap(AppComponent);
