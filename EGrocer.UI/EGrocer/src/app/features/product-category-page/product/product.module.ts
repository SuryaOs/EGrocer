import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule, RoutingComponents } from './product-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RoutingComponents
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  exports: [RoutingComponents]
})
export class ProductModule { }
