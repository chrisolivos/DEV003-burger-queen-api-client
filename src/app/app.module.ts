import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { WaiterComponent } from './dashboard/waiter/waiter.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { RouterModule } from '@angular/router';
// Interceptors
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { CheffComponent } from './dashboard/cheff/cheff.component';
import { DeliveriesComponent } from './dashboard/deliveries/deliveries.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimerComponent } from './dashboard/timer/timer.component';
import { ViewOrdersStateComponent } from './dashboard/view-orders-state/view-orders-state.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersComponent,
    AdminComponent,
    WaiterComponent,
    ProductsComponent,
    EmployeeComponent,
    DeliveriesComponent,
    CheffComponent,
    FooterComponent,
    TimerComponent,
    ViewOrdersStateComponent
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
