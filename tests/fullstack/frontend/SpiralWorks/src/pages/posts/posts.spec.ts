import { NavMock } from './../../../test-config/mocks-ionic';
import { SignUpPage } from './../sign-up/sign-up';
import { SignInPage } from './../sign-in/sign-in';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ProviderModule } from './../../providers/provider.module';
import { ComponentsModule } from './../../components/components.module';
import { PostsPage } from './posts';
import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController, NavParams } from 'ionic-angular';
import { SessionProvider } from './../../providers/session/session';
import { SessionMock, SessionMock2 } from '../../../test-config/mock-provider';
describe('Posts Page Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsPage],
      imports: [
        BrowserModule,
        IonicModule.forRoot(PostsPage),
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

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof PostsPage).toBe(true);
  });

  it('should signout', () => {
    component.onSignOut();
    expect(component.navCtrl.push).not.toBe(null);
  });

  it('should be signed in', () => {
    expect(component.ionViewCanEnter()).toBeTruthy();
  });

});


describe('Posts Page Component Not signedup', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsPage],
      imports: [
        BrowserModule,
        IonicModule.forRoot(PostsPage),
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
    fixture = TestBed.createComponent(PostsPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof PostsPage).toBe(true);
  });

  it('should be signed in', () => {
    expect(component.ionViewCanEnter()).toBeFalsy();
  });
  it('should be signed in', () => {
    expect(component.navCtrl.push).not.toBe(null);
  });
  
});
