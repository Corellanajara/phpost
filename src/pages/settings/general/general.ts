import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  enableNotifications = true;
  language: any;
  languages = ['English', 'Portuguese', 'French'];
  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralPage');
  }
  toggleNotifications() {
    if (this.enableNotifications) {
      alert('Notifications enabled.');
    } else {
      alert('Notifications disabled.');
    }
  }

}
