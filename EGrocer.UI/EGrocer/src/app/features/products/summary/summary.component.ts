import { Component, Inject, OnInit } from '@angular/core';
import { IProductService, ProductServiceToken } from '../service/product-i.service';

@Component({
  selector: 'app-product',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class ProductComponent implements OnInit {
  test: string;
  constructor(
    @Inject(ProductServiceToken)
    private _productService: IProductService
  ) { }

  ngOnInit() {
    this.test = this._productService.get();
  }

}
