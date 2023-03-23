import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBqRoutingModule } from './home-bq-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeBqRoutingModule
  ]
})
export class HomeBqModule { }
