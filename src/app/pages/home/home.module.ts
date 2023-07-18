// ======================= Angular modules =======================

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ======================= Internal modules =======================

import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

// ======================= Components modules =======================

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
