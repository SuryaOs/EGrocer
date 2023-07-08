import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule, RoutingComponents } from './checkout-routing.module';


@NgModule({
  declarations: [RoutingComponents],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
