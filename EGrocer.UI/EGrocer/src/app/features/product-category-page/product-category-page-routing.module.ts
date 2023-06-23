import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryPageComponent } from './product-category-page.component';


const routes: Routes = [
  { path: '', component: ProductCategoryPageComponent },
  { path: 'checkout/:productId', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoryPageRoutingModule { }
export const RoutingComponents = [ProductCategoryPageComponent]
