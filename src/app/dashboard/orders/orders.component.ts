import { Component, Input, Output } from '@angular/core';
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

  // @Input() dataEntry: ProductsAr[];
  //Declaracion de variables
  breakfasData !: any;
  
  filterProducts: ProductModel[] = [];


  Products!: Products[]

  product: Products = {
    id: 0,
    name: "",
    price: 0,
    image: "",
    type: "",
    dateEntry: new Date()
  };
  productsOrder: ProductsAr = {
    qty: 0,
    product: this.product
  }

  productsOrderAr: ProductsAr[] = []

  order: OrderModel[] = [];



  constructor(private route: Router, private http: HttpClient,
    private api: ApiService, private auth: AuthService) {
    const filterBreakfast = '';

  }

  ngOnInit(): void {
    this.getAllBreakfast();
    this.getTotal()


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
    // console.log(this.breakfasData);

    for (let i = 0; i < this.breakfasData.length; i++) {
      if (this.breakfasData[i].type === type) {
        // nuevo array con lo filtrado y esto mostrar
        // console.log("Funciona el type", this.breakfasData[i]);
        this.filterProducts.push(this.breakfasData[i])

      }
    }
    // console.log(this.filterProducts);
  }

  // totalProd: number = 0;
  //Funcion para mostar los productos en la variable de productsOrderArray
  // / /  //Funcion para mostar los productos en la variable de productsOrderArray
  onAddCart(productdata: any) {
    // console.log(productdata);

    const isProductInOrder: ProductsAr | undefined = this.productsOrderAr.find(
      (el) => el.product.id === productdata.id
    );
    if (isProductInOrder) {
      isProductInOrder.qty += 1;

      // this.totalProd = 0
      // this.totalProd =  isProductInOrder.product.price * isProductInOrder.qty;
      // isProductInOrder.product.price = isProductInOrder.product.price;
      //  this.totalProd = isProductInOrder.product.price * isProductInOrder.qty;
      //  console.log(this.totalProd);
    }
    else {

      this.product = productdata;
      this.productsOrderAr.push({ product: this.product, qty: 1 })
      // this.totalProd = this.product.price
      // console.log("el carrito de productos nuevo solo el producto agregado",this.productsOrder);
      // console.log("el carrito de productos completo",this.productsOrderAr);

    }
    this.getTotal()
    // this.getTotalUnic(this.productsOrderAr)

  }
  onLessCart(productdata: any) {

    const isProductInOrder: ProductsAr | undefined = this.productsOrderAr.find(
      (el) => el.product.id === productdata.id
    );
    if (isProductInOrder) {
      // isProductInOrder.qty += 1;
      if (isProductInOrder.qty > 0) {
        isProductInOrder.qty -= 1;
      }
      if (isProductInOrder.qty === 0) {
        console.log("array de productos",this.productsOrderAr);
        console.log("producto ID",productdata.id);
        let index = this.productsOrderAr.findIndex(x => x.product.id === productdata.id)
        console.log("posicion de producto a eliminar", index);
        this.productsOrderAr.splice(index, 1);
      
        // console.log("eliminar posicion", this.productsOrderAr.indexOf(productdata.id));
        // console.log("eliminar posicion con Find", this.productsOrderAr.findIndex(productdata.id));

      }

    }
    this.getTotal()
    // this.getTotalUnic(this.productsOrderAr)

  }
  //  

  totalProducts: number = 0;
  getTotal(): number {

    const total: number = this.productsOrderAr.reduce(
      (total, el) => (total += el.product.price * el.qty),
      0
    );
    console.log("el total", total);
    this.totalProducts = total
    return this.totalProducts
  }
  //
}