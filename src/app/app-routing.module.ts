import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { OrdersComponent } from './dashboard/orders/orders.component';


const routes: Routes = [
   {component:HomeComponent,path:''},
  {component:LoginComponent,path:'login'},
  {component:SignupComponent,path:'register'},
  {component:OrdersComponent,path:'orders'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule { }
