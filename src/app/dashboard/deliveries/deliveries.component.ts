import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/shared/api.service';
import { OrderModel } from '../orders/order.interface';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent {
  ordersData !: any;
  //  filterOrderPending=  OrderModel[] = [];

  orderDataToDelivery!: any;
 //  orderToChangeStatus: OrderModel;
 // orderToChangeStatus!: any;
  orderToChange: OrderModel[] = [];


  constructor(private api: ApiService, private auth: AuthService) { }


  ngOnInit(): void {
    this.getAllOrders()

  }

  getAllOrders() {
    // this.orderToChangeStatus=[];
    this.orderToChange.length = 0;
    this.api.getAllOrder()
      .subscribe(res => {
      
        // this.ordersData = '';
        this.ordersData = res;
        // 
        console.log(this.ordersData);

        for (let i = 0; i < this.ordersData.length; i++) {
          if (this.ordersData[i].status === 'delivering') {
            // nuevo array con lo filtrado y esto mostrar
            console.log("1 orderData en For  ", this.ordersData[i]);
            this.orderToChange.push(this.ordersData[i])

          }
        }

           console.log('2 ordersDataChange',this.orderToChange);
      })
  }



  updateOrderDeliveries(data: OrderModel) {
    const newState = "delivered";
    const orderToChangeStatus:OrderModel =
    {
      id: data.id,
      userId:  data.userId,
      client:  data.client,
      products:  data.products,
      status: newState,
      dataEntry: data.dataEntry,
      dateProcessed: new Date()
    };
    console.log('3 updateOrderStatus', orderToChangeStatus);
    console.log(data.products);

    this.api.updateOrderState(orderToChangeStatus, data.id!)
      .subscribe(res => {
        console.log('4 suscribe update',res, data.id);
        // this.orderToChange = [];
        // this.ordersData='';
        


      })
      this.getAllOrders();
  }
}
