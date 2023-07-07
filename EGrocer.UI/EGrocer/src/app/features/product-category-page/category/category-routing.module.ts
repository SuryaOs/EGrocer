import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/summary/summary.component';
import { CategoryDetailsComponent } from './components/details/details.component';


const routes: Routes = [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
export const RoutingComponents = [CategoryComponent, CategoryDetailsComponent]
