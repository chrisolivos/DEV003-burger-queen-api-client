import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthBqRoutingModule } from './auth-bq-routing.module';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';



@NgModule({
  declarations: [
    LoginComponent,
    SiginComponent,

  ],
  imports: [
    CommonModule,
    AuthBqRoutingModule
  ],
  exports:[
    LoginComponent,
    SiginComponent
  ]
})
export class AuthBqModule { }
