import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Cuentas='';

  url = 'http://localhost:5000/auth';
  
  constructor (private http:HttpClient){
      this.http.get(this.url).toPromise().then(data=>{
       // console.log(data);
        this.Cuentas = JSON.stringify(data);
      })
  }
}
