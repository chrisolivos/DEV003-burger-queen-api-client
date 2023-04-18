import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { OrderModel } from '../orders/order.interface';

@Component({
  selector: 'app-cheff',
  templateUrl: './cheff.component.html',
  styleUrls: ['./cheff.component.css']
})
export class CheffComponent {

  ordersData !: any;
 
  
  filterProductsOrder: OrderModel[] = [];

  constructor(private api: ApiService, private auth: AuthService) { }



  ngOnInit(): void {
    this.getAllOrders()

  }

  getAllOrders() {
    this.api.getAllOrder()
      .subscribe(res => {
        this.ordersData = res;
        // this.filterProductsOrder = []
        // this.filterProductsOrder = res
        // this.getFilterProduct(this.ordersData.id);
        console.log('ordersData',this.ordersData);
      })
  }

  // getFilterProduct(id: string) {
  //   this.filterProductsOrder = []
  //   // console.log(this.breakfasData);

  //   for (let i = 0; i < this.ordersData.length; i++) {
  //     if (this.ordersData[i].id === 1) {

  //       this.filterProductsOrder.push(this.ordersData[i])

  //     }
  //   }
  //   console.log('Filtrado',this.filterProductsOrder);
  // }

  logout() {
    this.auth.signOut();
    sessionStorage.removeItem('token'); 
    sessionStorage.removeItem('rol'); 
  }
}
