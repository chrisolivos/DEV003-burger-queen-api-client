import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { WaiterComponent } from './dashboard/waiter/waiter.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { AuthGuard } from './services/auth.guard';
import { AllowedRolGuard } from './services/allowed-rol.guard';
import { CheffComponent } from './dashboard/cheff/cheff.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { component: LoginComponent, path: 'login' },
  // {component:SignupComponent,path:'register', canActivate:[AuthGuard]},
  // {component:OrdersComponent,path:'orders'},
  {
    path: 'admin',
    children: [
      { path: '', component: AdminComponent, canActivate: [AuthGuard, AllowedRolGuard] },
      { path: 'products', component: ProductsComponent, canActivate: [AuthGuard, AllowedRolGuard] }
    ],
    data: {
      allowedRoles: 'admin'
    }
  },
  {
    path: 'waiter',
    children: [
      { path: '', component: WaiterComponent, canActivate: [AuthGuard, AllowedRolGuard] },
      { path: 'order', component: OrdersComponent, canActivate: [AuthGuard, AllowedRolGuard] }

    ],
    data: {
      allowedRoles: ['mesero', 'admin']
    }
  }, 
  {
    path: 'cheff', component: CheffComponent, canActivate: [AuthGuard, AllowedRolGuard],
    data: {
      allowedRoles: ['cheff', 'admin']
    }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
