import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { OrdersComponent } from './dashboard/orders/orders.component';

// const routes: Routes = [
//   {path: '', loadChildren:() => import('./home-bq/home-bq.module').then(m=>m.HomeBqModule)},
//   {path: '', loadChildren:() => import('./auth-bq/auth-bq.module').then(m=>m.AuthBqModule) },

// ];
const routes: Routes = [
   {component:HomeComponent,path:''},
  {component:LoginComponent,path:'login'},
  {component:SignupComponent,path:'register'},
  {component:OrdersComponent,path:'orders'},

];

// const routes: Routes = [
//   {component:HomeComponent,path:''},
//   {component:LoginComponent,path:'login'},
//   {component:SignupComponent,path:'register'},
//  // {component:HomeComponent,path:'',canActivate:[AuthGuard]},
// //  {component:UserComponent,path:'user',canActivate:[AuthGuard]},
//  // {component:CustomerComponent,path:'customer',canActivate:[AuthGuard]},
//  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule { }
