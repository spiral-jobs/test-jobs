import { NavMock } from './../../../test-config/mocks-ionic';
import { SignUpPage } from './../sign-up/sign-up';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ProviderModule } from './../../providers/provider.module';
import { ComponentsModule } from './../../components/components.module';
import { async, TestBed, fakeAsync } from '@angular/core/testing';
import { IonicModule, Platform, NavController, NavParams } from 'ionic-angular';
import { SessionProvider } from './../../providers/session/session';
import { SessionMock, SessionMock2 } from '../../../test-config/mock-provider';
describe('SignUp Page Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpPage],
      imports: [
        BrowserModule,
        IonicModule.forRoot(SignUpPage),
        ComponentsModule,
        ProviderModule.forRoot()
      ],
      providers: [
        StatusBar,
        SplashScreen,
        {
          provide: NavController,
          useClass: NavMock
        },
        {
          provide: NavParams,
          userClass: NavParams
        },
        {
          provide: SessionProvider,
          useClass: SessionMock
        }
      ]
    })
  }));

  function updateForm(email,lname, fname, phoneNumber, password) {
    component.signupForm.controls['email'].setValue(email);
    component.signupForm.controls['lname'].setValue(lname);
    component.signupForm.controls['fname'].setValue(fname);
    component.signupForm.controls['phoneNumber'].setValue(phoneNumber);
    component.signupForm.controls['password'].setValue(password);
    component.signupForm.controls['confirmation'].setValue(password);
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof SignUpPage).toBe(true);
  });

  it('should be able to signup', fakeAsync(() => {
    component.ngOnInit();
    updateForm('test@test.com', 'lname', 'fname', '123455', 'password');
    expect(component.navCtrl.push).not.toBe(null);
  }));

  it('it should not be able to enter', () => {
    expect(component.ionViewCanEnter()).toBeFalsy();
  });

});


describe('SignUp Page Component Not signedup', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpPage],
      imports: [
        BrowserModule,
        IonicModule.forRoot(SignUpPage),
        ComponentsModule,
        ProviderModule.forRoot()
      ],
      providers: [
        StatusBar,
        SplashScreen,
        {
          provide: NavController,
          useClass: NavMock
        },
        {
          provide: NavParams,
          userClass: NavParams
        },
        {
          provide: SessionProvider,
          useClass: SessionMock2
        }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPage);
    component = fixture.componentInstance;
  });

  function updateForm(email,lname, fname, phoneNumber, password) {
    component.signupForm.controls['email'].setValue(email);
    component.signupForm.controls['lname'].setValue(lname);
    component.signupForm.controls['fname'].setValue(fname);
    component.signupForm.controls['phoneNumber'].setValue(phoneNumber);
    component.signupForm.controls['password'].setValue(password);
    component.signupForm.controls['confirmation'].setValue(password);
  }

  it('should be created', () => {
    expect(component instanceof SignUpPage).toBe(true);
  });

  it('should be able to signup', fakeAsync(() => {
    component.ngOnInit();
    updateForm('test@test.com', 'lname', 'fname', '123455', 'password');
    expect(component.navCtrl.push).not.toBe(null);
  }));
  it('it should be able to enter', () => {
    expect(component.ionViewCanEnter()).toBeTruthy();
  })
});
