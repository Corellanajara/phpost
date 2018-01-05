import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { HttpClient } from '@angular/common/http';
import { TwitterConnect } from '@ionic-native/twitter-connect';


@IonicPage()
@Component({
  selector: 'page-socialnetwork',
  templateUrl: 'socialnetwork.html',
})
export class SocialnetworkPage {

  constructor(private twitter: TwitterConnect,public navCtrl: NavController, public navParams: NavParams,private facebook: Facebook,private http: HttpClient) {
  }
  user: any = {};
  insg : any= {};
  twt = "";
  lista: Array<string>;
  showUser: boolean = false;
  fb = false;
  tw = false;
  ig = false;

  ionViewDidLoad() {
    this.loginIG();
  }
  getInfo(){
    this.facebook.api('/me?fields=id,name,email,first_name,picture,last_name,gender',['public_profile','email'])
    .then(data=>{
      console.log(data);
      this.showUser = true;
      this.user = data;
    })
    .catch(error =>{
      console.error( error );
    });
  }

  loginFB(){

    this.facebook.login(['public_profile', 'email'])
    .then(rta => {
      console.log(rta.status);
      if(rta.status == 'connected'){
        // este es el token   alert(rta.authResponse.accessToken);
        console.log(rta);
        this.getInfo();
      };
    })
    .catch(error =>{
      console.error( error );
    });
    this.fb = !this.fb;
  }



  loginIG(){

    this.http.get('json/succes.json')
    .subscribe(res => {

      this.insg=res;
      console.log(res);
      if(this.insg.data.length>0){
        this.insg = this.insg.data[0].user;
      }


    },(err)=>{
      alert("FALLO EN CARGAR EL JSON");
    });
    this.ig = !this.ig;
  }

  loginTW(){
    let x;
    this.tw = !this.tw;

      function onSuccess(response) {

        x =  response.userName;

       alert("user name : "+ x);


      // Will console log something like:
      // {
      //   userName: 'myuser',
      //   userId: '12358102',
      //   secret: 'tokenSecret'
      //   token: 'accessTokenHere'
      // }
    }

    function onLogoutSuccess(response) {
    console.log(response);

    // Will console log something like:
    // {
    //   userName: 'myuser',
    //   userId: '12358102',
    //   secret: 'tokenSecret'
    //   token: 'accessTokenHere'
    // }
  }

    if(this.tw){
        this.twitter.login().then(onSuccess, onerror);
        this.twt = " Bienvenido " + x;

    }else{
      this.twitter.logout().then(onLogoutSuccess);
    }

  }







}
