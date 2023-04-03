import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { LunchComponent } from './dashboard/lunch/lunch.component';
import { WaiterComponent } from './dashboard/waiter/waiter.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},


  {component:LoginComponent,path:'login'},
  {component:SignupComponent,path:'register'},
  // {component:OrdersComponent,path:'orders'},
  {
    path:'admin', 
    children: [
      {path:'', component: AdminComponent },
      {path: 'order', component: LunchComponent}
]},
  {
    path:'waiter', 
    children: [
      {path:'', component: WaiterComponent },
      {path: 'order', component: OrdersComponent},
      {path: 'lunch', component: LunchComponent}
]}
// {}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule { }
