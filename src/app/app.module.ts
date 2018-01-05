import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { TabsPage } from '../pages/tabs/tabs';
import { CommentsPage } from '../pages/comments/comments';
import {SettingsPage} from '../pages/settings/settings'
import { ProfilePage } from '../pages/profile/profile';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import {HttpModule} from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilesProvider } from '../providers/profiles/profiles';
import { HttpClientModule } from '@angular/common/http';
import { Globalization } from '@ionic-native/globalization';
import {Camera } from '@ionic-native/camera';
import { TourPage } from '../pages/tour/tour';
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { OAuthService } from 'angular-oauth2-oidc';
import { UrlHelperService } from 'angular-oauth2-oidc';
import { AlertController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { ApiConectorProvider } from '../providers/api-conector/api-conector';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    CommentsPage,
    ProfilePage,
    SettingsPage,
    LoginPage,
    TourPage,
    HomePage,
    ChatPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SettingsPage,
    ContactPage,
    ProfilePage,
    CommentsPage,
    LoginPage,
    TourPage,
    HomePage,
    ChatPage,
    TabsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Globalization,
    Camera,
    NativePageTransitions,
    UrlHelperService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfilesProvider,
    TwitterConnect,
    OAuthService,
    AlertController,
    Facebook,
    ApiConectorProvider
  ]
})

export class AppModule {}
