import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SessionProvider } from '../../providers/session/session';
import { ISession } from '../../interfaces/session/session.interface';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'signup',
  defaultHistory: ['home']
})
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage implements OnInit, OnDestroy {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public alertCtrl: AlertController,
    private sessionProvider: SessionProvider,
    private formBuilder: FormBuilder
  ) {
  }

  public isCore: boolean = (this.platform.is('core'));
  public isLoading: boolean = false;
  public signupForm: FormGroup;
  private signupSubscription: Subscription = null;
  private session: ISession = JSON.parse(localStorage.getItem('session'));

  ngOnInit () {
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      lname: [null, Validators.required],
      fname: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      password: [null, Validators.required],
      confirmation: [null, Validators.required]
    });
  }

  ngOnDestroy () {
    (this.signupSubscription) ? this.signupSubscription.unsubscribe() : null;
  }

  ionViewCanEnter(): boolean{
    if (this.session && this.session.token) {
      this.navCtrl.push('posts');
      return false;
    } else {
      return true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  onClick () {
    if (this.signupForm.valid) {
      this.Signup();
    } else {
      this.isLoading = false;
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
  

  Signup() {
    this.isLoading = true;
    this.signupSubscription = this.sessionProvider.Signup(this.signupForm.value)
    .subscribe(
      (session: ISession) => {
        localStorage.setItem('session', JSON.stringify(session));
        this.navCtrl.push('posts');
        this.isLoading = false;
      },
      (err: any) => {
        this.showAlert('Signup Error', JSON.stringify(err._body));
        this.isLoading = false;
      }
    );
  }

}
