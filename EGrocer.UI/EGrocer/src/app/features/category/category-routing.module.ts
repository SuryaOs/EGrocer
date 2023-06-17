import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './summary/summary.component';
import { CategoryDetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
  {
    path: 'category/:id',
    component: CategoryDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
export const RoutingComponents = [CategoryComponent, CategoryDetailsComponent]
