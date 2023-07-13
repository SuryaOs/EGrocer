import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCategoryPageRoutingModule, RoutingComponents } from './product-category-page-routing.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RoutingComponents],
  imports: [
    CommonModule,
    ProductCategoryPageRoutingModule,
    SharedModule,
    CategoryModule,
    ProductModule, ]
})
export class ProductCategoryPageModule { }
