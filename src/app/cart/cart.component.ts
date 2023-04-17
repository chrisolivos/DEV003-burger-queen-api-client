import { Component, Input, OnInit } from '@angular/core';
import { ProductsAr } from '../dashboard/orders/order.interface';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @Input() ProductsAr:any;
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.api.disparadorCarrito.subscribe(data => {
      console.log("Recibiendo data", data);
    })
  }

  // addCart(){
  //   this.api.addCart(){

  //   }
  // }
}
