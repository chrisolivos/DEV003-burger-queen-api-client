import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/shared/api.service';
import { OrderModel } from '../orders/order.interface';

@Component({
  selector: 'app-cheff',
  templateUrl: './cheff.component.html',
  styleUrls: ['./cheff.component.css']
})
export class CheffComponent {

  ordersData !: any;
  //  filterOrderPending=  OrderModel[] = [];

  orderDataPending !: any;
  //  orderToChangeStatus: OrderModel;
  // orderToChangeStatus!: any;
  orderToChange: OrderModel[] = [];
  // momentoActual = new Date();
  // hora = this.momentoActual.getHours();
  // minuto = this.momentoActual.getMinutes();
  // segundo = this.momentoActual.getSeconds();
  // horaImprimible = this.hora + " : " + this.minuto + " : " + this.segundo
  horaImprimible !:any;

  constructor(private api: ApiService, private auth: AuthService) { }


  ngOnInit(): void {
    this.getAllOrders()
 this.mueveReloj()
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
          if (this.ordersData[i].status === 'pending') {
            // nuevo array con lo filtrado y esto mostrar
            console.log("1 orderData en For  ", this.ordersData[i]);
            this.orderToChange.push(this.ordersData[i])

          }
        }

        console.log('2 ordersDataChange', this.orderToChange);
      })
  }



  updateOrderStatus(data: OrderModel) {
    const newState = "delivering";
    const orderToChangeStatus: OrderModel =
    {
      id: data.id,
      userId: data.userId,
      client: data.client,
      products: data.products,
      status: newState,
      dataEntry: data.dataEntry
    };
    console.log('3 updateOrderStatus', orderToChangeStatus);
    console.log(data.products);

    this.api.updateOrderState(orderToChangeStatus, data.id!)
      .subscribe(res => {
        console.log('4 suscribe update', res, data.id);
        // this.orderToChange = [];
        // this.ordersData='';



      })
    this.getAllOrders();
  }

  mueveReloj(){
    let momentoActual = new Date()
    let hora = momentoActual.getHours()
    let minuto = momentoActual.getMinutes()
    let segundo : number = momentoActual.getSeconds()
    
    this.horaImprimible = hora + " : " + minuto + " : " + segundo
  // this.horaImprimible= segundo++
    setTimeout(()=>{this.mueveReloj()},1000)
 //   this.mueveReloj()
}

  logout() {
    this.auth.signOut();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('rol');
  }
}
