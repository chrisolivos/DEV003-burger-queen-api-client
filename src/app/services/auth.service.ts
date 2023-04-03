import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  url = 'http://localhost:5000/login';

//   onLogin(obj:any) : Observable <any>{
//     console.log("errores ",obj);
// return this.http.post(this.apiurl,obj)
//   }
signUp(userObj: any ) {
return this.http.post<any>(`${this.url}register`, userObj)
}

// signIn(loginObj:any){
//   return this.http.post<any>(`${this.url} authenticade`, loginObj)
// }


storeToken(tokenValue: string){
  sessionStorage.setItem('token', tokenValue)
}
getToken(){
  return sessionStorage.getItem('token')
}
isloggedin(): boolean{
  return !!sessionStorage.getItem('token')
}

}