import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  roleAs: any;
  constructor(private http:HttpClient,private route: Router) { 

  }
  url = 'http://localhost:5000/login';


signUpV(login:any, ){
 
  return this.http.post(this.url, login)

}

signOut(){
  sessionStorage.clear()
  this.route.navigate(['/login'])
}


getToken(){
  return sessionStorage.getItem('token')
}

isloggedin(): boolean{

  return !!sessionStorage.getItem('token')
}


}