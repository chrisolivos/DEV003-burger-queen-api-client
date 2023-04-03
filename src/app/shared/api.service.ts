import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  urlUser = 'http://localhost:5000/users';
  urlOrders = 'http://localhost:5000/orders';

  constructor(private http: HttpClient) { }
  getEmploye(){
  return this.http.get<any>(this.urlUser)
  .pipe(map(res=>{
    return res;
  }))
  }
updateEmployee(data:any, id: number){
  return this.http.put<any>(this.urlUser+'/'+id, data)
  .pipe(map((res:any)=>{
  return res
  }))
  }
  deleteEmploye(id:number){
    return this.http.delete(this.urlUser+'/'+id)
    .pipe(map((res:any)=>{
  return res;
    }))
  }

  getAllProduct(){
    return this.http.get<any>(this.urlOrders)
    .pipe(map(res=>{
      return res;
    }))
    }  
}
