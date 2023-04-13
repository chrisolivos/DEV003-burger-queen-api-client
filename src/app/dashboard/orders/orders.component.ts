import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../shared/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProductModel } from '../products/product-model';
import { OrderModel } from './order.model';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  breakfasData !: any;
  breakfasData2 !: any;
  filterProducts: ProductModel[] = [];
  // orderModelObj: OrderModel[]= []
  // let breakfasData: any = {
  //   accessToken: '',
  //   user: {
  //     email: '',
  //     id: ''
  //  }
  // this.OrderModelO
  // urlProducts = 'http://localhost:5000/products';

  constructor(private route: Router, private http: HttpClient,
    private api: ApiService, private auth: AuthService) {
    const filterBreakfast = '';

  }

  ngOnInit(): void {
    this.getAllBreakfast();
  }

// this.orderModelObj.
  getAllBreakfast() {
    this.api.getAllProduct()
      .subscribe(res => {
        //  console.log(res);
        this.filterProducts = []
        this.breakfasData = res;
        this.filterProducts = res




      })
  }
  getFilterProduct(type: string) {

    this.filterProducts = []
    // this.breakfasData.filter(workorder => workrder.timestamp > 123456786) 
    console.log(this.breakfasData);
    // this.breakfasData.filter(workorder => workrder.timestamp > 123456786) 
    // console.log(this.filterProducts);

    for (let i = 0; i < this.breakfasData.length; i++) {
      if (this.breakfasData[i].type === type) {
        // nuevo array con lo filtrado y esto mostrar
        console.log("Funciona el type", this.breakfasData[i]);
        this.filterProducts.push(this.breakfasData[i])

      }
    }
    console.log(this.filterProducts);
  }
  addCart(row: any) {
    console.log(row.id);
    console.log(row.name);
    console.log(row.price);
  }
}

