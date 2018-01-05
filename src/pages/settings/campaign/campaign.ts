import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the CampaignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-campaign',
  templateUrl: 'campaign.html',
})
export class CampaignPage {

  campaign = {
    name: '',
    profileImage: 'http://www.freeiconspng.com/uploads/profile-icon-9.png',
    coverImage: 'http://chelsealaneco.com/media/catalog/category/Grey_Wallpaper.jpg',
    occupation: '',
    location: '',
    description: '',

  };

  since:any;
  to:any;
  country:any;
  searchQuery: string = '';
  Country: string[];
  cities : string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http : Http,private camera : Camera) {
    this.initializeItems();
  }


  initializeItems() {
    this.http.get('/json/country_codes.json').map(res=>res.json()).subscribe(data => {
      let variable = [];
      for(let i = 0 ; i < data.length ; i++){
        variable.push(data[i]);
      }
      this.Country = variable;
      console.log(this.Country);
  });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampaignPage');
  }
  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.campaign.profileImage = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }

}
