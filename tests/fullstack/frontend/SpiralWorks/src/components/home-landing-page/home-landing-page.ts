import { Component } from '@angular/core';
/**
 * Generated class for the HomeLandingPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-landing-page',
  templateUrl: 'home-landing-page.html'
})
export class HomeLandingPageComponent {

  text: string;

  constructor() {
    console.log('Hello HomeLandingPageComponent Component');
    this.text = 'My Blog';
  }

}
