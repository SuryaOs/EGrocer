import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PriceDetailsComponent } from './components/price-details/price-details.component';


const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
export const RoutingComponents = [CheckoutComponent, SummaryComponent, PriceDetailsComponent]
