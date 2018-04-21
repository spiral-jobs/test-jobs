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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public sessionProvider: SessionProvider
  ) {
  }
  private session: ISession = this.sessionProvider.GetCredentials();

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

  ionViewCanEnter(): boolean{
    if (this.session) {
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
