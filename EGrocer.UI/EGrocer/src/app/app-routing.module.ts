import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './features/product/summary/summary.component';
import { ProductDetailsComponent } from './features/product/details/details.component';
import { CategoryComponent } from './features/category/summary/summary.component';
import { CategoryDetailsComponent } from './features/category/details/details.component';


const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'category/:id',
    component: CategoryDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ProductComponent, CategoryComponent, ProductDetailsComponent, CategoryDetailsComponent]
