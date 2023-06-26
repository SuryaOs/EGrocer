import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private router: Router,
    public _cartService: CartService,
  ) { }

  ngOnInit() {
  }

  navigateToCheckoutPage(): void {
    this.router.navigate(['checkout']);
  }

}
