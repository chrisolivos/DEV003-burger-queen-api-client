import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { OrdersComponent } from './dashboard/orders/orders.component';


const routes: Routes = [

  {component:LoginComponent,path:'login'},
  {component:SignupComponent,path:'register'},
  {component:OrdersComponent,path:'orders'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule { }
