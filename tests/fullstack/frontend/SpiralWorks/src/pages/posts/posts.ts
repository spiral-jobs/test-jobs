import { ISession } from './../../interfaces/session/session.interface';
import { SessionProvider } from './../../providers/session/session';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'posts'
})
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {
  private session: ISession = JSON.parse(localStorage.getItem('session'));
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public sessionProvider: SessionProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

  ionViewCanEnter(): boolean{
    if (this.session && this.session.token) {
      return true;
    } else {
      this.navCtrl.push('home');
      return false;
    }
  }

  onSignOut () {
    this.sessionProvider.SignOut()
    .then(() => {
      this.navCtrl.push('home');
    });
  }

}
