import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductService, ProductServiceToken } from '../product/service/product-i.service';
import { Observable } from 'rxjs';
import { IProduct } from '../product/models/product-i';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  product$!: Observable<IProduct>;
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    @Inject(ProductServiceToken) private _productService: IProductService
  ) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    if (productId) {
      this.loadProduct(productId);
    }
  }

  private loadProduct(productId: number) {
    this.product$ = this._productService.getProductByProductId(productId);
  }

  incrementQuantity(availableQuantity: number) {
    if (this.quantity < availableQuantity) {
      this.quantity++;
    } else {
      window.alert(`${availableQuantity} is available`);
    }
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    } else {
      window.alert(`minimum quantity`);
    }
  }

  getTotalPrice(price: number) {
    return this.quantity * price;
  }

  placeOrder(){
    this.product$.subscribe(product =>
      this.buildRequestBody(product)
    )
  }
  buildRequestBody(product: any)
  {

  }
}
