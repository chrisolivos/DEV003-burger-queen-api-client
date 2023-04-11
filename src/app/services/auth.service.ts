import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private route: Router) { 

  }
  url = 'http://localhost:5000/login';

//   onLogin(obj:any) : Observable <any>{
//     console.log("errores ",obj);
// return this.http.post(this.apiurl,obj)
//   }

// signUp(userObj: any ) {
// return this.http.post<any>(`${this.url}register`, userObj)
// }

signUpV(login:any, ){
 
  return this.http.post(this.url, login)

}
// signIn(loginObj:any){
//   return this.http.post<any>(`${this.url} authenticade`, loginObj)
// }

// const headers =new HttpHeaders({
//   "Autorization:":`Bearer ${token}`,

// })

signOut(){
  sessionStorage.clear()
  this.route.navigate(['/login'])
}

storeToken(tokenValue: string){
  sessionStorage.setItem('accessToken', tokenValue)
}
getToken(){
  return sessionStorage.getItem('accessToken')
}
isloggedin(): boolean{
  console.log(sessionStorage.getItem('accessToken'));
  console.log(sessionStorage.getItem('rol'));
  return !!sessionStorage.getItem('accessToken')
}

}