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
  apiurl='http://localhost:5000/auth';

//   onLogin(obj:any) : Observable <any>{
//     console.log("errores ",obj);
// return this.http.post(this.apiurl,obj)
//   }
isloggedin(){
  return sessionStorage.getItem('accesToken')!=null;
}
getrole(){
  return sessionStorage.getItem('rol')!=null?sessionStorage.getItem('rol')?.toString():'';
}
  // RegisterUser(inputdata:any){
  //   return this.http.post(this.apiurl,inputdata)
  // }
  // GetUserbyCode(id:any){
  //   return this.http.get(this.apiurl+'/'+id);
  // }
  // Getall(){
  //   return this.http.get(this.apiurl);
  // }
  // updateuser(id:any,inputdata:any){
  //   return this.http.put(this.apiurl+'/'+id,inputdata);
  // }
  // getuserrole(){
  //   return this.http.get('http://localhost:3000/role');
  // }


  // GetAllCustomer(){
  //   return this.http.get('http://localhost:3000/customer');
  // }
  // Getaccessbyrole(role:any,menu:any){
  //   return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  // }
}