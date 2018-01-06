import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import {ProfilesProvider} from '../../providers/profiles/profiles'

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {



  following = false;

  user = {
    name: 'Paula Gatingler',
    profileImage: 'assets/imgs/gatolentes.png',
    coverImage: 'assets/imgs/gatonavidad.jpg',
    occupation: 'Programmer',
    location: 'Over the fridge',
    description: 'A wise cat once said: The more you meow something, the better you will become at it and better the cat you are.',
    followers: 456,
    following: 1052,
    posts: 35
  };

  posts = [
    {
      postImageUrl: 'assets/imgs/gatosushi.jpg',
      text: `I believe in being strong when everything seems to be going wrong.
             I believe that happy girls are the prettiest girls.
             I believe that tomorrow is another day and I believe in miracles.`,
      date: 'November 5, 2016',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      postImageUrl: 'assets/imgs/gatosushi.jpg',
      text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
      date: 'October 23, 2016',
      likes: 30,
      comments: 64,
      timestamp: '30d ago'
    },
    {
      postImageUrl: 'assets/imgs/gatosushi.jpg',
      date: 'June 28, 2016',
      likes: 46,
      text: `Hope is the thing with feathers that perches in the soul
             and sings the tune without the words And never stops at all.`,
      comments: 66,
      timestamp: '4mo ago'
    },
  ];

  constructor(public navCtrl: NavController,private ProfilesProvider: ProfilesProvider) {}


  ionViewDidLoad() {
    console.log("IT's OK!");
    let Profile = this.ProfilesProvider.getProfile();
    console.log("el perfil que recibo del provider es este ", Profile);
    this.user.name = Profile.name;
    this.user.profileImage = Profile.profileImage;

    if(Profile.occupation != null){
      this.user.occupation = Profile.occupation;
      this.user.location = Profile.location;
      this.user.description = Profile.description;
    }
  }
  campaign(){
      this.navCtrl.push('CampaignPage');
  }
  follow() {
    this.following = !this.following;

  }
  EditProfile(user){
    console.log(user);
    this.ProfilesProvider.setProfile(user);
    this.navCtrl.push('EditprofilePage');
  }

  imageTapped(post) {
    alert('Post image clicked');
  }

  comment(post) {
    alert('Comments clicked');
  }

  like(post) {
    alert('Like clicked');
  }

}
