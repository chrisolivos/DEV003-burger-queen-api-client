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
  orderDataPending !: any;
  orderToChange: OrderModel[] = [];
  horaImprimible !: any;

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

         //Contador del tiempo de preparado
            let start: Date = new Date(this.ordersData[i].dateEntry);
            let end: Date = new Date();
            let milliseconds = (end.getTime() - start.getTime())
            let seconds = Math.floor(milliseconds / 1000);
            let minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            seconds = seconds % 60;
            minutes = minutes % 60;

            console.log(`${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}:${this.padTo2Digits(
              seconds,)}`);
            this.ordersData[i].time = `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}:${this.padTo2Digits(
              seconds,)}`

            this.orderToChange.push(this.ordersData[i])
          }
        }
      })
  }
 
  updateOrderStatus(data: OrderModel) {

    // let start: Date = new Date(data.dateEntry);
  
    // let end: Date = new Date();


    // let dif = (end.getTime() - start.getTime())/60000

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

     // time: dif
    };

    this.api.updateOrderState(orderToChangeStatus, data.id!)
      .subscribe(res => {
        // console.log('4 suscribe update', res, data.id);

      })
    this.getAllOrders();
  }


  //El tiempo de espera de la orden
  mueveReloj(dateEntry: Date) {
    // let momentoActual = new Date()
    // let hora = momentoActual.getHours()
    // let minuto = momentoActual.getMinutes()
    // let segundo: number = momentoActual.getSeconds()

    // this.horaImprimible = hora + " : " + minuto + " : " + segundo
    // // //this.horaImprimible= segundo++
    // setTimeout(() => { this.mueveReloj() }, 1000)
    //   this.mueveReloj()

    //  Prueba 2 de tomar el tiempo

   // let start: Date = new Date(dateEntry);
    // console.log("la fecha incial", start);
    // for (let i = 0; i < 1000; i++) {
    //   Math.sqrt(i);
    // }

//let end: Date = new Date();
    // console.log("fecha actual ", end)


    let dif = (end.getTime() - start.getTime()) / 1000

    // console.log("la diferencia del tiempo en milisegundos ", dif)
    // console.log("la diferencia del tiempo en segundos ", dif/1000)
    // console.log("la diferencia del tiempo ", dif)
    // console.log("tiempo de diferencia; ",time);
    //  console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');

  }

  logout() {
    this.auth.signOut();
  }
}
