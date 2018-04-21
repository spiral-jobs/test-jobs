import { FormBuilder } from '@angular/forms';
import { NavMock, AlertMock } from './../../../test-config/mocks-ionic';
import { SignUpPage } from './../sign-up/sign-up';
import { SignInPage } from './../sign-in/sign-in';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ProviderModule } from './../../providers/provider.module';
import { ComponentsModule } from './../../components/components.module';
import { async, TestBed, fakeAsync } from '@angular/core/testing';
import { IonicModule, Platform, NavController, NavParams, AlertController } from 'ionic-angular';
import { SessionProvider } from './../../providers/session/session';
import { SessionMock, SessionMock2 } from '../../../test-config/mock-provider';
import { AlertControllerMock } from 'ionic-mocks';
describe('SignIn Page Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInPage],
      imports: [
        BrowserModule,
        IonicModule.forRoot(SignInPage),
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
        },
        {
          provide: AlertController,
          useClass: AlertMock
        },
        FormBuilder,
        
      ]
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SignInPage);
        component = fixture.componentInstance;
      });
  }));

  function updateForm(loginName, userPassword) {
    component.signinForm.controls['loginName'].setValue(loginName);
    component.signinForm.controls['password'].setValue(userPassword);
  }

  it('should be created', () => {
    expect(component instanceof SignInPage).toBe(true);
  });

  it('should redirect to posts page', () => {
    expect(component.navCtrl.push).not.toBe(null);
    expect(component.ionViewCanEnter()).toBeTruthy();
  });

  it('should be able to signin', fakeAsync(() => {
    component.ngOnInit();
    updateForm('somename', 'password');
    component.onClick();
    expect(component.navCtrl.push()).not.toBe(null);
  }));

});


describe('Signin Page Component Not signedup', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInPage],
      imports: [
        BrowserModule,
        IonicModule.forRoot(SignInPage),
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
    fixture = TestBed.createComponent(SignInPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof SignInPage).toBe(true);
  });

  it('should be able to see the page', () => {
    expect(component.ionViewCanEnter).toBeTruthy();
  });
  
});
