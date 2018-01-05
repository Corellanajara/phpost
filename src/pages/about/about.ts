import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'

})
export class AboutPage {

  items = [];
  posts = [];
  tmp = [];
  pagina = 0;
  limit = 0;
  
  user = {
    name: 'Usuario de Pruebas',
    profileImage: '../assets/imgs/gatouser.jpeg',
    current:3421.42,
    coverImage: 'assets/imgs/gatosushi.jpg',
    occupation: 'Programmer of this app',
    location: 'Over the fridge',
    description: 'A wise cat once said: The more you meow something, the better you will become at it and better the cat you are.',
    followers: 456,
    following: 1052,
    posts: 35
  }

  constructor(public navCtrl: NavController,public http:Http) {

    this.items.push(this.POSTS(this.pagina));

  }



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
        console.log("ele --> ", this.posts[i]);
        this.tmp.push(this.posts[i]);
      }
      console.log("POSTS DE PAGINA ---> ",this.tmp);
      return this.tmp;



    },(err)=>{
      alert("FALLO EN CARGAR EL JSON");
    });
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



}
