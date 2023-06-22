import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/details/details.component';
import { ProductComponent } from './components/summary/summary.component';


const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
export const RoutingComponents = [ProductComponent,  ProductDetailsComponent]