import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,private view:ViewController) {
  }
  tmp = [];
  data = this.navParams.get('data');
  i = 0;
  comments = [
    {
      id:25,
      text : "Hi! is a very useful tool",
      imageUrl : "assets/imgs/gatouser.jpeg"
    },
    {
      id:24,
      text : " i think so",
      imageUrl : "assets/imgs/gatolentes.png"
    },
    {
      id:23,
      text : "yeah so much",
      imageUrl : "assets/imgs/logo.png"
    },
    {
      id:22,
      text : " is better than chinese food!",
      imageUrl : "assets/imgs/gatochino.jpg"
    },
    {
      id:21,
      text : " is better than chinese food!",
      imageUrl : "assets/imgs/gatochino.jpg"
    },
    {
      id:1,
      text : "Hi! is a very useful tool",
      imageUrl : "assets/imgs/gatouser.jpeg"
    },
    {
      id:2,
      text : " i think so",
      imageUrl : "assets/imgs/gatolentes.png"
    },
    {
      id:3,
      text : "yeah so much",
      imageUrl : "assets/imgs/logo.png"
    },
    {
      id:4,
      text : " is better than chinese food!",
      imageUrl : "assets/imgs/gatochino.jpg"
    },
    {
      id:5,
      text : " is better than chinese food!",
      imageUrl : "assets/imgs/gatochino.jpg"
    },
    {
      id:6,
      text : "Hi! is a very useful tool",
      imageUrl : "assets/imgs/gatouser.jpeg"
    },
    {
      id:7,
      text : " i think so",
      imageUrl : "assets/imgs/gatolentes.png"
    },
    {
      id:8,
      text : "yeah so much",
      imageUrl : "assets/imgs/logo.png"
    },
    {
      id:9,
      text : " is better than chinese food!",
      imageUrl : "assets/imgs/gatochino.jpg"
    },
    {
      id:10,
      text : " is better than chinese food!",
      imageUrl : "assets/imgs/gatochino.jpg"
    },
    {
      id:11,
      text : "Hi! is a very useful tool",
      imageUrl : "assets/imgs/gatouser.jpeg"
    },
    {
      id:12,
      text : " i think so",
      imageUrl : "assets/imgs/gatolentes.png"
    },
    {
      id:13,
      text : "yeah so much",
      imageUrl : "assets/imgs/logo.png"
    },
    {
      id:14,
      text : " is better than chinese food!",
      imageUrl : "assets/imgs/gatochino.jpg"
    },
    {
      id:15,
      text : " is better than chinese food!",
      imageUrl : "assets/imgs/gatochino.jpg"
    },
    {
      id:16,
      text : "Hi! is a very useful tool",
      imageUrl : "assets/imgs/gatouser.jpeg"
    },
    {
      id:17,
      text : " i think so",
      imageUrl : "assets/imgs/gatolentes.png"
    },
    {
      id:18,
      text : "yeah so much",
      imageUrl : "assets/imgs/logo.png"
    },
    {
      id:19,
      text : " is better than chinese food!",
      imageUrl : "assets/imgs/gatochino.jpg"
    },
    {
      id:20,
      text : " is better than chinese food!",
      imageUrl : "assets/imgs/gatochino.jpg"
    }

  ]


    /*
    data = this.navParams.get('data');
    comments = this.api.postIdCommentsGet(this.data.id);


    ionViewWillLoad(){
      for(let i = 0 ; i < comments.length; i++){
        this.tmp.push(comments[i]);
      }

    }
    infiniteScroll(infiniteScroll){
      let morecomments = this.api.postIdCommentsGet(this.data.id , (comments.length-1) );
      for (let i = 0 ; i < morecomments.length ; i++){
        this.tmp.push(morecomments[i]);
      }
    }

    */
    still = true;
    comment : any ;
    ionViewWillLoad() {


    if(this.data>15){
      this.i = this.data;
      while(this.i != this.data-15){

        for (let item of this.comments) {
          if(item.id==this.i){
              this.tmp.push(item);
          }
        }
        this.i = this.i -1 ;
      }
    }else{
        for( this.i= this.data;this.i>0;this.i--){
          for (let item of this.comments) {
            if(item.id==this.i){
                this.tmp.push(item);
            }
          }


        }
      }
      console.log("data : ",this.data,"tmp : ",this.tmp);
    }

    presentToast() {
      let toast = this.toastCtrl.create({
        message: 'There is no more comments',
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }


    doInfinite(infiniteScroll) {
      var c ;
      setTimeout(() => {
        if(this.i>5){
          for(c=5;c>0;c--){
            for (let item of this.comments) {
              if(item.id==this.i){
                  this.tmp.push(item);
              }
            }
            this.i -= 1;

          }
        }else{
          while(this.i>0){
            for (let item of this.comments) {
              if(item.id==this.i){
                  this.tmp.push(item);
              }
            }
            this.i -=1;
          }
          this.presentToast();
          this.still = false;
        }

        infiniteScroll.complete();
      }, 500);
      }

  comment_form(){
    console.log(this.comment);
    var value = document.getElementById("comment");
    value.innerHTML="";
  }

  close(){
    this.view.dismiss();
  }
}
