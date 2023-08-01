import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule, RoutingComponents } from './checkout-routing.module';
import { UserAddressComponent } from './components/user-address/user-address.component';


@NgModule({
  declarations: [RoutingComponents, UserAddressComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
