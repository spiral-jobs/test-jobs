import { SessionProvider } from './../../providers/session/session';
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

  
  constructor(public navCtrl: NavController, private sessionProvider: SessionProvider) {

  }
  public session: ISession = this.sessionProvider.GetCredentials();
  public isSignedIn: boolean = this.session ? true : false;

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
