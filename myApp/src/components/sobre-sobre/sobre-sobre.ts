import { Component } from '@angular/core';

/**
 * Generated class for the SobreSobreComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sobre-sobre',
  templateUrl: 'sobre-sobre.html'
})
export class SobreSobreComponent {

  text: string;

  constructor() {
    console.log('Hello SobreSobreComponent Component');
    this.text = 'Hello World';
  }

}
