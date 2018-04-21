import { HomeLandingPageComponent } from './home-landing-page';
import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

describe('Home Landing Page Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLandingPageComponent],
      imports: [
        IonicModule.forRoot(HomeLandingPageComponent)
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingPageComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof HomeLandingPageComponent).toBe(true);
  });

});
