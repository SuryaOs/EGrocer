import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/details/details.component';
import { ProductComponent } from './components/summary/summary.component';
import { SummaryGridComponent } from './components/summary-grid/summary-grid.component';


const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'admin/product',
    component: SummaryGridComponent,
  },
  {
    path: 'admin/product/add',
    component: ProductDetailsComponent
  },
  {
    path: 'admin/product/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
export const RoutingComponents = [ProductComponent,  ProductDetailsComponent, SummaryGridComponent]
