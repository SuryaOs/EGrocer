import { Component, Inject, OnInit } from '@angular/core';
import { IProduct } from '../../../product/models/product-i';
import { IAddProduct, ICarts, IOrderDetails } from '../../models/add-order-i';
import { CartService } from 'src/app/shared/service/cart/cart.service';
import { IOrderService, OrderServiceToken } from '../../service/order-i.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  products!: IProduct[];
  cartList!: ICarts[];

  constructor(
    @Inject(OrderServiceToken)
    private _orderService: IOrderService,
    private _cartService: CartService
  ) { }

  ngOnInit() {
    this.loadCart();
  }
  public placeOrder() {
    const requestBody = this.buildRequestBody();
    this._orderService.placeOrder(requestBody).subscribe(response => {
      console.log(response);
    })

  }

  private buildRequestBody(): IOrderDetails {
    const orderDetailRequest: IAddProduct[] = this.cartList.map(cart => {
      return {
        productId: cart.product.id,
        quantity: cart.quantity,
        totalPrice: cart.quantity * cart.product.price
      }
    });

    const requestBody: IOrderDetails = {
      userAddressId: 2, //later revert it
      totalItem: this._cartService.getTotalItems(),
      totalPrice: this._cartService.getTotalPrice(),
      orderDetailsRequest: orderDetailRequest
    }

    return requestBody;
  }

  private loadCart() {
    this._cartService.cartList$.subscribe((x: ICarts[]) => {
      this.cartList = x;
      this.products = x.map((y) => y.product);
    });
  }

}
