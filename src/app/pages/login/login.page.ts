import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  private baseUrl = 'http://localhost:5000/';
  public user: any = {    
    login: '',
    password: ''
  };

  constructor(
    public toastCtrl: ToastController,
    public router: Router,
    public httpClient: HttpClient) {

     }

    public login(user: any){
      console.log(user);
      this.httpClient.post(this.baseUrl + 'login', user, httpOptions)
      .pipe(
        tap( 
          data => {
            this.router.navigate(['/chat']);
            console.log("Success");
          },
          error => {
            
            this.toastCtrl.create({
              message: 'Something\'s not right :-(',
              showCloseButton: true,
              translucent: true,
              closeButtonText: 'X'
            }).then(toast => toast.present());

            console.log(error);
          }
        )
      ).subscribe();
    }
}
