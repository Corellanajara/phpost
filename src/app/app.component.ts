import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilesProvider } from '../providers/profiles/profiles';
import { TourPage } from '../pages/tour/tour';
import { TabsPage } from '../pages/tabs/tabs';
import { Globalization } from '@ionic-native/globalization';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {



  constructor(private storage: Storage,provider : ProfilesProvider,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private globalization: Globalization)
  {

    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      storage.get('name').then((val) => {
        if(val!=null){
          console.log(val);
          this.rootPage = TabsPage;

        }else{
          this.rootPage= TourPage;
        }
      });
      storage.set('name', 'User');
    });

    // Or to get a key/value pair

  /*
    this.globalization.getPreferredLanguage()
    .then(res => alert(res.value))
    .catch(e => alert(e));
    */
  }
  rootPage:any= null;





}
