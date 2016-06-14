import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import {Hero}    from './homeModel';//aqui nesse caso teve q vir entre {}, se for um só da pasta não deve vir entre chaves

@Component({
  selector: 'home-form',
  // templateUrl: './homeForm.html'
  template: require('./homeForm.html')
})
export default class  HomeForm {

  constructor() {
    console.log('HomeForm');
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { 
    // console.log('submittedl = ', this.submitted); 
    this.submitted = true; 
  }

  // TODO: Remove this when we're done
  get diagnostic() { 
    // console.log('MODEL = ', JSON.stringify(this.model)); 
    return JSON.stringify(this.model); 
  }

  // Reset the form with a new home AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  newHero() {
    this.model = new Hero(42, '', '');
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(homeForm)}}
  showFormControls(form:NgForm){
    // console.log('form = ', form); 
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }
  
  /////////////////////////////

}