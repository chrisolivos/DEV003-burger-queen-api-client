/*import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormControl, FormGroup}from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {*/
/* name = new FormControl(''); */
 /* Cuentas = '';

  url = 'http://localhost:5000/auth';

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      // console.log(data);
      this.Cuentas = JSON.stringify(data);
    })
  }
  updateName() {
    this.name.setValue('Nancy');
  }
}*/

/*
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup}from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup|any;
  constructor(private _http:HttpClient, private _route:Router){}

  ngOnInit(): void {
  this.login = new FormGroup({
    'fname': new FormControl(),
    'pasword': new FormControl()
  })

}
  logindata(login: FormGroup){
    // console.log(this.login.value)
    this._http.get<any>("http://localhost:3000/auth")
     .subscribe(res=>{
      const user = res.find((a:any)=>{
        console.log( a.fname)
        return a.fname === this.login.value.fname && a.pasword === this.login.value.pasword
      })
    
      if(user){
        alert('Tu estas registrado')
        this.login.reset();
        this._route.navigate(['dashboard'])
      }else{
        alert('No te encuentras registrado habla con tu administrador')
        this._route.navigate(['login'])
      }
     }, err => {
      alert('Algo anda mal')
     }
     )
    }
}*/
import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup}from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup|any;
  constructor(){}

  ngOnInit(): void {
  this.login = new FormGroup({
    'fname': new FormControl(),
    'pasword': new FormControl()
  })

}
  logindata(login:FormGroup){
console.log(this.login.value)
 
}
}
