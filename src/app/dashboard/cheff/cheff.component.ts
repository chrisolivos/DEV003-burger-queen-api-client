import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/shared/api.service';
import { OrderModel } from '../orders/order.interface';
// import { TimerComponent } from '../timer/timer.component';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cheff',
  templateUrl: './cheff.component.html',
  styleUrls: ['./cheff.component.css']
})
export class CheffComponent {

  ordersData !: any;
  orderDataPending !: any;
  orderToChange: OrderModel[] = [];
  contador: any = [];
  timer: any = [];

  constructor(private api: ApiService, private auth: AuthService) { }

  ngOnInit(): void {
    this.getAllOrders()
  }

  public padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  getAllOrders() {
    this.orderToChange.length = 0;
    this.api.getAllOrder()
      .subscribe(res => {
        this.ordersData = res;
        for (let i = 0; i < this.ordersData.length; i++) {
          // nuevo array con lo filtrado y esto mostrar
          if (this.ordersData[i].status === 'pending') {
            this.orderToChange.push(this.ordersData[i])
          }
        }
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

      dateEntry: data.dateEntry,
      dateProcessed: new Date()
    };

    this.api.updateOrderState(orderToChangeStatus, data.id!)
      .subscribe(res => {
        // console.log('4 suscribe update', res, data.id);
      })
    this.getAllOrders();
  }


  //El tiempo de espera de la orden
  counterTime(id: any, dateEntry: Date) {
    let start: Date = new Date(dateEntry);
    let secondsTimeStart = 1000 * (start.getHours() * 3600 + start.getMinutes() * 60 + start.getSeconds())
    let currentSeconds = 60;
    let count = interval(1000).pipe(
      map(() => this.format(secondsTimeStart))
      // map(count => this.format(count + currentSeconds * 1000, secondsTimeStart))
    );
    count.subscribe(res => {
      this.timer[id] = res
    })
    return this.timer[id];

  }

  // format(seconds: number, segundosFechaInicio: number): string {
  format(segundosFechaInicio: number): string {
    return new Date(+new Date() - segundosFechaInicio).toLocaleString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }


  logout() {
    this.auth.signOut();
  }
}
