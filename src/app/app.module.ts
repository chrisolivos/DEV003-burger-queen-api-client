import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { UsersToArrayPipe } from './dashboard/admin/users-to-array.pipe';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OrdersComponent,
    AdminComponent,
    UsersToArrayPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
