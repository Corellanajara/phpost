import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  fb = false;
  tw = false;
  ig = false;

  profilePicture: string;
  profileRef: any;
  errorMessage: any;
  placeholderPicture = 'http://api.adorable.io/avatar/200/bob';

  enableNotifications = true;
  language: any;
  currency: any;
  paymentMethod: any;

  languages = ['English', 'Portuguese', 'French'];
  paymentMethods = ['Paypal', 'Credit Card'];
  currencies = ['USD', 'BRL', 'EUR'];

  user = {
    name: 'Gato User',
    imageUrl: 'assets/imgs/gatouser.jpeg'
  };

  constructor(
    public navCtrl: NavController,
  ) { }

  toggleNotifications() {
    if (this.enableNotifications) {
      alert('Notifications enabled.');
    } else {
      alert('Notifications disabled.');
    }
  }
/*
  updateImage(value) {
    this.profilePicture = 'data:image/jpeg;base64,' + value.val();
  }

  updateProfileImage() {
    this.camera.getPicture({
      quality: 50,
      allowEdit: true,
      cameraDirection: this.camera.Direction.FRONT,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.user.imageUrl = imageData;
    }, (err) => {
      alert('Error: ' + err);
    });
  }
*/
  loginFB(){
    this.fb = !this.fb;
  }
  loginTW(){
    this.tw = !this.tw;
  }
  loginIG(){
    this.ig = !this.ig;
  }
  logOut() {
    if(confirm("do you want to log out?")){
      console.log("log out succefully");
    }else{
      console.log("the user decide to stay :D");
    }
}
}
