import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule, RoutingComponents } from './category-routing.module';


@NgModule({
  declarations: [RoutingComponents],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
