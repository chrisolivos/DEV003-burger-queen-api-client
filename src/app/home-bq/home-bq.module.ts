import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../component/header/header.component';
import { HomeBqRoutingModule } from './home-bq-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../component/component.module';



@NgModule({
  declarations: [
    HomeComponent,
   
  ],
  imports: [
    CommonModule,
    HomeBqRoutingModule,
    ComponentModule
  ]
})
export class HomeBqModule { }
