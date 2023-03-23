import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthBqRoutingModule } from './auth-bq-routing.module';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SiginComponent,

  ],
  imports: [
    CommonModule,
    AuthBqRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    SiginComponent
  ]
})
export class AuthBqModule { }
