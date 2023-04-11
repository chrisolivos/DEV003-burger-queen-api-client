import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { WaiterComponent } from './dashboard/waiter/waiter.component';
import { LunchComponent } from './dashboard/lunch/lunch.component';
// import { CanActivate } from '@angular/router';
import { ProductsComponent } from './dashboard/products/products.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersComponent,
    AdminComponent,
    WaiterComponent,
    LunchComponent,
    ProductsComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    RouterModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
