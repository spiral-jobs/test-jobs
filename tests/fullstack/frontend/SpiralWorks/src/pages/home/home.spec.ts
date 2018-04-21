import { NavMock } from './../../../test-config/mocks-ionic';
import { SignUpPage } from './../sign-up/sign-up';
import { SignInPage } from './../sign-in/sign-in';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ProviderModule } from './../../providers/provider.module';
import { ComponentsModule } from './../../components/components.module';
import { HomePage } from './home';
import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController } from 'ionic-angular';
import { SessionProvider } from './../../providers/session/session';
import { SessionMock, SessionMock2 } from '../../../test-config/mock-provider';
describe('Home Page Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        BrowserModule,
        IonicModule.forRoot(HomePage),
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
          provide: SessionProvider,
          useClass: SessionMock
        }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof HomePage).toBe(true);
  });

  it('should go to signin', () => {
    component.onSignIn();
    expect(component.navCtrl.push).not.toBe(null);
  });
  it('should go to signup', () => {
    component.onSignUp();
    expect(component.navCtrl.push).not.toBe(null);
  });
  it('should go to post', () => {
    component.goToPosts();
    expect(component.navCtrl.push).not.toBe(null);
  });

  it('should tell that the user is signed in', () => {
    expect(component.isSignedIn).toBeTruthy();
  });

  it('should have a session', () => {
    expect(component.session).not.toBe(null);
  });

});

describe('Home Page Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        BrowserModule,
        IonicModule.forRoot(HomePage),
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
          provide: SessionProvider,
          useClass: SessionMock2
        }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should tell that the user is not signed in', () => {
    expect(component.isSignedIn).toBeFalsy();
  });
});
