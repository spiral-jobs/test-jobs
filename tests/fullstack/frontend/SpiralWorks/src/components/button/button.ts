import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'button-custom',
  templateUrl: 'button.html'
})
export class ButtonComponent {

  @Input() text: string;
  @Input() buttonColor: string;
  @Input() isLoading: boolean;
  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello ButtonComponent Component');
  }

  onClick (event: MouseEvent) {
    this.click.emit();
    event.stopPropagation();
  }

}
