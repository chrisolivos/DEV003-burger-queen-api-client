import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},


  {component:LoginComponent,path:'login'},
  {component:SignupComponent,path:'register',canActivate:[AuthGuard]},
  {component:OrdersComponent,path:'orders',canActivate:[AuthGuard]},
  {component:AdminComponent,path:'admin',canActivate:[AuthGuard]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule { }
