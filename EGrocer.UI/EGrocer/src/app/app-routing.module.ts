import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './features/products/summary/summary.component';
import { ProductDetailsComponent } from './features/products/details/details.component';
import { CategoryComponent } from './features/categories/summary/summary.component';
import { CategoryDetailsComponent } from './features/categories/details/details.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'products/:id',
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
