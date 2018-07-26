import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePage } from './pages/welcome/welcome.page';

import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';

import { ChatPage } from './pages/chat/chat.page';
import { PeoplePage } from './pages/people/people.page';
import { MePage } from './pages/me/me.page';



const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },  
  { path: 'chat', component: ChatPage },
  { path: 'people', component: PeoplePage },
  { path: 'me', component: MePage },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
