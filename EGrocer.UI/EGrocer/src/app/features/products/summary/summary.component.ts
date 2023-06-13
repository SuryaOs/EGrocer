import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { IProductService, ProductServiceToken } from '../service/product-i.service';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product-i';

@Component({
  selector: 'app-product',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  products$: Observable<IProduct[]>;
  constructor(
    @Inject(ProductServiceToken)
    private _productService: IProductService
  ) { }

  ngOnInit() {
    this.products$ = this._productService.getAllProducts();
  }

}
