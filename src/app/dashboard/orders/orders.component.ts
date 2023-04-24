import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../shared/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProductModel } from '../products/product-model';
import { Products, ProductsAr } from './order.interface';
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  // @Input() dataEntry: ProductsAr[];
  //Declaracion de variables
  modalChange: boolean = false;
  breakfasData !: any;

  filterProducts: Products[] = [];


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

  // order: OrderModel[] = [];



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

  }

 

  //Funcion para aumentar la cantitad de productos

  onAddCart(productdata: any) {
    console.log(productdata);

    const isProductInOrder: ProductsAr | undefined = this.productsOrderAr.find(
      (el) => el.product.id === productdata.id
    );
    if (isProductInOrder) {
      isProductInOrder.qty += 1;

    }
    else {

      this.product = productdata;
      this.productsOrderAr.push({ product: this.product, qty: 1 })


    }
    this.getTotal()
    // this.getTotalUnic(this.productsOrderAr)

  }

  //Disminuir la cantitad de productos
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
        console.log("array de productos", this.productsOrderAr);
        //  console.log("producto ID", productdata.id);
        let index = this.productsOrderAr.findIndex(x => x.product.id === productdata.id)
        //  console.log("posicion de producto a eliminar", index);
        this.productsOrderAr.splice(index, 1);


      }

    }
    this.getTotal()

  }

  // Funcion qie muestra los totales de los productos 

  totalProducts: number = 0;
  getTotal(): number {

    const total: number = this.productsOrderAr.reduce(
      (total, el) => (total += el.product.price * el.qty),
      0
    );
    console.log("El total", total);
    this.totalProducts = total
    return this.totalProducts
  }
  // Funcion para mostrar el usuario que se encuentra registrado 
  //  userId: number=0
  //   getUserId() {
  //     // Number(sessionStorage.getItem('userId'))

  //     this.userId =  Number(sessionStorage.getItem('userId'))
  //     console.log(this.userId);
  //     // return this.userId


  //   }
  //
  order = new FormGroup({
    userId: new FormControl(Number(sessionStorage.getItem('userId'))),
    client: new FormControl(""),
    products: new FormControl(this.productsOrderAr),
    status: new FormControl("pending"),
    dateEntry: new FormControl(new Date()),
  })

  orderdata(order: FormGroup): void {
    //this.getUserId()
    //no debe guardar archivos null
    this.api.addOrder(this.order.value)
      .subscribe(res => {
        console.log(res);
        this.productsOrderAr = [];

       


      })
  // this.order.reset()



  }
  openModal() {
    this.modalChange = true;
  }
  closeModal() {
    this.order.reset()
    this.modalChange = false;
  }


}

