import { ISession } from './../../interfaces/session/session.interface';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public session: ISession = JSON.parse(localStorage.getItem('session'));
  public isSignedIn: boolean = this.session ? true : false;
  constructor(public navCtrl: NavController) {

  }

  onSignUp () {
    this.navCtrl.push('signup');
  }

  onSignIn () {
    this.navCtrl.push('signin')
    .catch((err) => {
      console.log('cant enter', err);
    })
  }

  goToPosts () {
    this.navCtrl.push('posts');
  }

}
