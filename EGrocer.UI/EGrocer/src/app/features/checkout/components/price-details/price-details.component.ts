import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/shared/service/cart/cart.service";
import { ICarts } from "../../models/add-order-i";

@Component({
  selector: "app-price-details",
  templateUrl: "./price-details.component.html",
  styleUrls: ["./price-details.component.scss"],
})
export class PriceDetailsComponent implements OnInit {
  totalItems = this._cartService.getTotalItems();
  totalPrice = this._cartService.getTotalPrice();
  constructor(private _cartService: CartService) {}

  ngOnInit() {}
}
