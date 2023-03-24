import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren:() => import('./home-bq/home-bq.module').then(m=>m.HomeBqModule)},
  {path: '', loadChildren:() => import('./auth-bq/auth-bq.module').then(m=>m.AuthBqModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
