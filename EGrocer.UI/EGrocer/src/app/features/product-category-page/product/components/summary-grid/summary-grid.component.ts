import { Component, Inject, OnInit } from '@angular/core';
import { IProduct } from '../../models/product-i';
import { IGridColumn } from 'src/app/shared/interfaces/grid-column-i';
import { IProductService, ProductServiceToken } from '../../service/product-i.service';

@Component({
  selector: 'app-summary-grid',
  templateUrl: './summary-grid.component.html',
  styleUrls: ['./summary-grid.component.scss']
})
export class SummaryGridComponent implements OnInit {
  products!: IProduct[];
  gridColumns: IGridColumn[] = [
    { propertyName: 'name', displayName: 'Name' },
    { propertyName: 'price', displayName: 'Price' },
    { propertyName: 'description', displayName: 'Description' },
    { propertyName: 'categoryId', displayName: 'Category ID' },
  ];

  constructor(
    @Inject(ProductServiceToken)
    private _productService: IProductService,
  ) { }

  ngOnInit() {
    this.loadProducts();
  }
  private loadProducts() {
    this._productService.getAllProducts().subscribe((product: IProduct[]) => {
      this.products = product;
    });
  }
}
