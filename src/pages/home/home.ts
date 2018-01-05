import { Component } from '@angular/core';
import {ModalController, NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SettingsPage } from '../settings/settings';
import { CommentsPage } from '../comments/comments';
import { Platform} from  'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { EditprofilePage } from '../editprofile/editprofile';
import { ProfilesProvider } from '../../providers/profiles/profiles';
import { AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',


})

export class HomePage {
  FCMPlugin : any;
  params: Object;
  pushPage: any;
  ok = false;
    items = [];
    posts = [];
    tmp = [];
    pagina = 0;
    limit = 0;

    constructor(public alertCtrl: AlertController,private modal : ModalController, private platform : Platform, public navCtrl: NavController,public http:Http,private ProfilesProvider: ProfilesProvider)
    {

      this.items.push(this.POSTS(this.pagina));

    }

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

    /*
    // luego eliminar todas las variables que no se usaran
    POSTS(){
      let post = this.api.getfeed();
      for(let i = 0 ; i < post.length ; i++){
        this.tmp.push(post);
      }
    }
    doInfinite(id){
      let post = this.api.getfeed(id){
      for(let i = 0 ; i < post.length;i++){
        this.tmp.push(post);
      }
    }
    }

    */


    POSTS(pagina){
      //called after the constructor and called  after the first ngOnChanges()
      this.http.get('json/data.json')
      .map(res => res.json())
      .subscribe(res => {
        this.posts = res.posts;
        this.limit = pagina + 2;
        if (this.posts.length < (pagina + 2)) {
          this.limit = this.posts.length;
        }
        for (let i = pagina; i < this.limit; i++){
          this.tmp.push(this.posts[i]);
        }



        return this.tmp;



      },(err)=>{
        alert("FALLO EN CARGAR EL JSON");
      });
    }

    options(post) {
      let confirm = this.alertCtrl.create({
      title: 'delete this post?',
      message: 'if you delete this this you cant undo it?',
      buttons: [
        {
          text: 'keep it',
          handler: () => {
            console.log('keep it clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('delete clicked');
            //this.api.postIdDelete(post.id,)
          }
        }
      ]
    });
    confirm.present();
  }



      doInfinite(infiniteScroll) {
      setTimeout(() => {

          if (this.posts.length > this.pagina){
          this.pagina += 2;
          this.POSTS(this.pagina);} else {
            console.log("BIEN, ACABO LA CARGA DE ELEMENTOS");
          }

        infiniteScroll.complete();
      }, 500);
      }

// este debo borrarlo cuando esté funcionando la api, ya que seria redundante
      user_redirect(){
        ////let user = this.api.profileIdGet(user.id)
        this.ProfilesProvider.setProfile(this.user);

        this.pushPage = ProfilePage;
        this.params = { id : 23};
      }
////////////////////////////////////////////////////////////////////////////

      profile_redirect(user){
        //let user = this.api.profileIdGet(user.id);

        this.ProfilesProvider.setProfile(user);
        this.pushPage = ProfilePage;
        this.params = { id : user.id};

      }
      campaign_redirect(campaign){
        //let campaign = this.api.profileIdCampaignsGet(campaign.id);
        //this.ProfilesProvider.setProfile(campaign);
        //this.pushPage = ProfilePAge;
        //this.params = {id : campaign.id};
      }
      image(item) {
        //let media = this.api.mediaIdGet(item.id);
        //const newmodal = this.modal.create(MediaPage,{data:item});
        //newmodal.present();
      }
      comment(item) {

        //const newmodal = this.modal.create(CommentsPage, {data:item});
        const newmodal = this.modal.create( CommentsPage, { data:item.comments});
        newmodal.present();
      }

      like(item) {
        console.log("like clicked");
        item.likes += 1 ;
      }


  }
