import { ButtonComponent } from './button';
import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

describe('button Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [
        IonicModule.forRoot(ButtonComponent)
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof ButtonComponent).toBe(true);
  });

  it('should emit an event when clicked', () => {
    const event = new Event('mouse-click');
    component.click.subscribe(event => {
      expect(event).not.toEqual(null);
    });
    component.onClick(event);
  });

});
