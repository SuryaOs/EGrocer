import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'product-category', loadChildren: () => import('./features/product-category-page/product-category-page.module').then(m => m.ProductCategoryPageModule) },
  { path: 'checkout', loadChildren: () => import('./features/product-category-page/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

