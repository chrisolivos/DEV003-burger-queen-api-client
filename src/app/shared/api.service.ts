import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlUser = 'http://localhost:5000/users';
  urlOrders = 'http://localhost:5000/orders';
  urlProducts = 'http://localhost:5000/products'

  constructor(private http: HttpClient, private auth: AuthService ) { }
  getEmploye() {
    
    return this.http.get<any>(this.urlUser)
      .pipe(map(res => {
        return res;
      }))
  }

  updateEmployee(data: any, id: number) {
    return this.http.put<any>(this.urlUser + '/' + id, data)
      .pipe(map((res: any) => {
        return res
      }))
  }
  deleteEmploye(id: number) {
    return this.http.delete(this.urlUser + '/' + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  
  // const token= this.auth.getToken()
  getAllProduct() {

    const httpOption:any = {
      header: new HttpHeaders({
      'Authorizacion': "Bearer" + sessionStorage.getItem('accesToken'),
      'X-Pagination': '2'
      // "Content-Type": "application/json; charset=UTF-8",
    })}
    console.log(httpOption);
    return this.http.get<any>(this.urlProducts, httpOption)
    // return this.http.get<any>(this.urlProducts, {headers} )
    //   .pipe(map(res => {
    //     return res;
    //   }))
  }
  
  // setHeaders: {
  //   Authorization: `Bearer ${this.auth.getToken()}`
  // }

  addAllProduct(formProducts:any) {
    return this.http.post(this.urlProducts,formProducts)
      .pipe(map(res => {
        return res;
      }))
  }

  deleteProduct(id: number) {
    return this.http.delete(this.urlProducts + '/' + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  
  updateProduct(data: any, id: number) {
    return this.http.put<any>(this.urlProducts + '/' + id, data)
      .pipe(map((res: any) => {
        return res
      }))
  }
  
}
