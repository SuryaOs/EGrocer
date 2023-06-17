import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryPageComponent } from './product-category-page.component';


const routes: Routes = [
  { path: '', component: ProductCategoryPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoryPageRoutingModule { }
export const RoutingComponents = [ProductCategoryPageComponent]
