import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlUser = 'http://localhost:5000/users';
  urlOrders = 'http://localhost:5000/orders';
  urlProducts = 'http://localhost:5000/products'

  constructor(private http: HttpClient) { }
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

  getAllProduct() {
    return this.http.get<any>(this.urlProducts)
      .pipe(map(res => {
        return res;
      }))
  }

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
