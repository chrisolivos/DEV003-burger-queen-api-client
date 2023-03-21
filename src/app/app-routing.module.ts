import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {redirectTo:'login', path: '', pathMatch:'full'},
  {path: '', loadChildren:() => import('./modules/home/home.module').then(m=>m.HomeModule)},

  {path:'signup',component: SignupComponent },
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
