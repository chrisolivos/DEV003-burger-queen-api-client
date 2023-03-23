import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthBqRoutingModule } from './auth-bq-routing.module';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    CommonModule,
    AuthBqRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
   
  ]
})
export class AuthBqModule { }
