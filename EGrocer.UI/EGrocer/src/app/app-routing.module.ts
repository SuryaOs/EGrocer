import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'product-category', pathMatch: 'full' },
  { path: 'product-category', loadChildren: () => import('./features/product-category-page/product-category-page.module').then(m => m.ProductCategoryPageModule) },
  { path: 'checkout', loadChildren: () => import('./features/product-category-page/checkout/checkout.module').then(m => m.CheckoutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

