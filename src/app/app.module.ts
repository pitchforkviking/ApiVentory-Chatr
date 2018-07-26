import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WelcomePage } from './pages/welcome/welcome.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { ChatPage } from './pages/chat/chat.page';
import { PeoplePage } from './pages/people/people.page';
import { MePage } from './pages/me/me.page';

@NgModule({
  declarations: [
    AppComponent, 
    WelcomePage, 
    LoginPage,
    RegisterPage,
    ChatPage,
    PeoplePage,
    MePage
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
