import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ICarts } from "src/app/features/product-category-page/checkout/models/add-order-i";
import { IProduct } from "src/app/features/product-category-page/product/models/product-i";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartListSubject: BehaviorSubject<ICarts[]> = new BehaviorSubject<
    ICarts[]
  >([]);
  public cartList$ = this.cartListSubject.asObservable();

  constructor() {}

  public addToCart(product: IProduct, quantity: number) {
    const currentCart = this.cartListSubject.getValue();
    const existingCart = currentCart.find(
      (cart) => cart.product.id === product.id
    );

    if (existingCart) {
      existingCart.quantity = quantity;
    } else {
      currentCart.push({ product, quantity });
    }

    this.cartListSubject.next([...currentCart]);
  }

  public removeFromCart(product: IProduct) {
    const currentCart = this.cartListSubject.getValue();
    const removeIndex = currentCart.findIndex(cart => cart.product.id === product.id);
    currentCart.splice(removeIndex, 1);

    this.cartListSubject.next([...currentCart]);
  }

  public getCartCount() {
    return this.cartListSubject.getValue().length;
  }

}
