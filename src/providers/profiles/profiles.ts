import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProfilesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfilesProvider {

  public profile : any ;
  public firstime : any = null
  constructor(public http: HttpClient) {

  }
  getfirstime(){
    return this.firstime;  
  }
  installed(){
    this.firstime = 1;
  }
  setProfile(user){
    this.profile = user;
    console.log("se ha definido como ",user)
  }
  public getProfile(){
    return this.profile;
  }
}
