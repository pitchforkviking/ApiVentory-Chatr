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
  selector: 'register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  private baseUrl = 'http://localhost:5000/';
  public user: any = {
    user: '',
    login: '',
    password: ''
  };

  constructor(
    public toastCtrl: ToastController,
    public httpClient: HttpClient,
    public router: Router) {

   }

   public register(user: any): void{
      console.log(user);
      this.httpClient.post(this.baseUrl + 'register', user, httpOptions)
      .pipe(
        tap( 
          data => {
            this.router.navigate(['/login']);
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
