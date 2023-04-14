import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../shared/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProductModel } from '../products/product-model';
import { OrderModel, Products, ProductsAr } from './order.interface';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  //Declaracion de variables
  breakfasData !: any;
  breakfasData2 !: any;
  filterProducts: ProductModel[] = [];

  product: Products = {
    id: 0,
    name: "",
    price:0,
    image: "",
    type:"",
    dateEntry: new Date()
  };
  productsOrder: ProductsAr = {
    qty: 0,
    product: this.product
  }
   
productsOrderAr: ProductsAr[]=[]
 
  order: OrderModel[] = [];

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

// Mostrar todos los productos
  getAllBreakfast() {
    this.api.getAllProduct()
      .subscribe(res => {
        //  console.log(res);
        this.filterProducts = []
        this.breakfasData = res;
        this.filterProducts = res

      })
  }

  // Filter de los productos por tipo 
  getFilterProduct(type: string) {
    this.filterProducts = []
    console.log(this.breakfasData);

    for (let i = 0; i < this.breakfasData.length; i++) {
      if (this.breakfasData[i].type === type) {
        // nuevo array con lo filtrado y esto mostrar
        // console.log("Funciona el type", this.breakfasData[i]);
        this.filterProducts.push(this.breakfasData[i])

      }
    }
    console.log(this.filterProducts);
  }

  //Funcion para mostar los productos en la variable de productsOrderArray
  addCart(productdata: any) {
 
    let base: number = 0;
    this.product = productdata;
    base = base + 1
    // console.log(base);
    this.productsOrder.qty = base
    this.productsOrder.product =this.product
    // console.log(this.productsOrder.qty)
    this.productsOrderAr.push(this.productsOrder)
    console.log(this.productsOrderAr);
 
  }
}

