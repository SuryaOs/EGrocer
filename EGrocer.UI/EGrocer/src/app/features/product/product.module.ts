import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule, RoutingComponents } from './product-routing.module';


@NgModule({
  declarations: [
    RoutingComponents
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
