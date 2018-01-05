import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import {ProfilesProvider} from '../../providers/profiles/profiles'
import {ProfilePage} from '../profile/profile';
import { Camera,CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
  //template: ' <ion-item> <form (ngSubmit)="logForm()"><ion-item><ion-label>Todo</ion-label><ion-input type="text" [(ngModel)]="todo.title" name="title"></ion-input></ion-item><ion-item><ion-label>Description</ion-label><ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea></ion-item><button ion-button type="submit" block>Add Todo</button></form></ion-item>',
})
export class EditprofilePage {

  following = false;

  user = {
    name: '',
    profileImage: 'assets/imgs/gatolentes.png',
    coverImage: 'assets/imgs/gatonavidad.jpg',
    occupation: 'Programmer',
    location: 'Over the fridge',
    description: 'A wise cat once said: The more you meow something, the better you will become at it and better the cat you are.',
    followers: 456,
    following: 1052,
    posts: 35
  };

  profilePicture: string;
  profileRef: any;
  errorMessage: any;
  placeholderPicture = 'http://api.adorable.io/avatar/200/bob';



  constructor(public navCtrl: NavController,private ProfilesProvider: ProfilesProvider,private camera : Camera) {

  }

  logForm(user) {

      this.ProfilesProvider.setProfile(user);

      this.navCtrl.push(ProfilePage);

  }



  ionViewDidLoad() {

    let Profile = this.ProfilesProvider.getProfile();
    this.user.name = Profile.name;
    this.user.profileImage = Profile.profileImage;
    if(Profile.occupation != null){
      this.user.occupation = Profile.occupation;
      this.user.location = Profile.location;
      this.user.description = Profile.description;
    }

  }

  follow() {
    this.following = !this.following;

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
      this.user.profileImage = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }


  imageTapped(post) {

  }

  comment(post) {

  }

  like(post) {

  }

}
