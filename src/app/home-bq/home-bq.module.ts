import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBqRoutingModule } from './home-bq-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeBqRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class HomeBqModule { }
