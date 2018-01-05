import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ProfilesProvider } from '../../providers/profiles/profiles';
import { ApiConectorProvider } from '../../providers/api-conector/api-conector'


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private api : ApiConectorProvider,public navCtrl: NavController, public navParams: NavParams,private ProfilesProvider: ProfilesProvider) {
  }
  params: Object;
  pushPage: any;
  user = {
    name: 'Usuario de Pruebas',
    profileImage: 'https://randomuser.me/api/portraits/women/9.jpg',
    current:21.42,
    coverImage: 'assets/imgs/gatosushi.jpg',
    occupation: 'Programmer of this app',
    location: 'Over the fridge',
    description: 'A wise cat once said: The more you meow something, the better you will become at it and better the cat you are.',
    followers: 456,
    following: 1052,
    posts: 35
  }
  user_redirect(){
    console.log("redirigiré");

    this.ProfilesProvider.setProfile(this.user);
    console.log("seteé");
    this.pushPage = ProfilePage;
    this.params = { id : 23};

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  general(){
      this.navCtrl.push('GeneralPage');
  }
  currency(){
      this.navCtrl.push('CurrencyPage');
  }
  others(){
      this.navCtrl.push('OthersPage');
  }
  socialnetwork(){
      this.navCtrl.push('SocialnetworkPage');
  }
  campaign(){
      this.navCtrl.push('CampaignPage');
  }
}
