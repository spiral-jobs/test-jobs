import { ISession } from './../../interfaces/session/session.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SessionProvider } from './../../providers/session/session';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'signin',
  defaultHistory: ['home']
})
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage implements OnInit, OnDestroy {

  public isLoading: boolean = false;
  private signInSubscription: Subscription = null;
  public signinForm: FormGroup;
  public session: ISession = JSON.parse(localStorage.getItem('session'));

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sessionProvider: SessionProvider,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController
  ) {
  }

  ngOnInit () {
    this.signinForm = this.formBuilder.group({
      loginName: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnDestroy () {
    (this.signInSubscription) ? this.signInSubscription.unsubscribe() : null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  ionViewCanEnter(): boolean{
    if (this.session) {
      this.navCtrl.push('posts');
      return false;
    } else {
      return true;
    }
  }
  onClick () {
    if (this.signinForm.valid) {
      this.SignIn();
    } else {
      this.showAlert('Ooops!', 'Please input valid information in the form');
    }
  }

  showAlert(title: string, subTitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  SignIn() {
    this.isLoading = true;
    this.signInSubscription = this.sessionProvider.Signin(this.signinForm.value.loginName, this.signinForm.value.password)
    .subscribe(
      (session: ISession) => {
        localStorage.setItem('session', JSON.stringify(session));
        this.navCtrl.push('posts');
        this.isLoading = false;
      },
      (err: any) => {
        this.showAlert('Signin Error', JSON.stringify(err._body));
        this.isLoading = false;
      }
    );
  }

}
