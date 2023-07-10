import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import {
  IProductService,
  ProductServiceToken,
} from "../../service/product-i.service";
import { Observable } from "rxjs";
import { IProduct } from "../../models/product-i";
import {
  FileUploadServiceToken,
  IFileUploadService,
} from "src/app/shared/service/file-upload/file-upload-i.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "src/app/shared/service/cart/cart.service";

@Component({
  selector: "app-product",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class ProductComponent implements OnInit, OnChanges {
  products!: IProduct[];
  @Input() categoryId!: number;
  productQuantities: { [productId: number]: number } = {};

  constructor(
    @Inject(ProductServiceToken)
    private _productService: IProductService,
    public _cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['categoryId'].firstChange) {
      const categoryId = changes['categoryId'].currentValue;
      this.loadProducts(categoryId);
    }
  }

  navigateToCheckoutPage(): void {
    this.router.navigate(['checkout']);
  }

  private loadProducts(categoryId?: number): void {
    if (categoryId == undefined || categoryId == 0) {
      this._productService.getAllProducts().subscribe((product: IProduct[]) => {
        this.products = product;
        //initialing dictionary with key value pairs
        const isEmpty = Object.keys(this.productQuantities).length === 0;
        if(isEmpty)
        this.products.forEach(
          (product) => (this.productQuantities[product.id] = 0)
        );
      });
    } else
      this._productService
        .getProductByCategoryId(categoryId)
        .subscribe((product: IProduct[]) => {
          this.products = product;
        });
  }

  incrementQuantity(product: IProduct): void {
    let updatedQuantity = ++this.productQuantities[product.id];
    if (updatedQuantity > product.availableQuantity) {
      updatedQuantity = --this.productQuantities[product.id];
      window.alert(`max quantity ${updatedQuantity} exceeded`);
    } else
      this._cartService.addToCart(product, updatedQuantity);
  }

  decrementQuantity(product: IProduct): void {
    const updatedQuantity = --this.productQuantities[product.id];
    if (updatedQuantity === -1) {
      window.alert("Quantity should not be negative");
      this.productQuantities[product.id]++;
    } else if (updatedQuantity > 0) {
      this.productQuantities[product.id] = updatedQuantity;
      this._cartService.addToCart(product, updatedQuantity);
    } else {
      this._cartService.removeFromCart(product);
    }
  }

  // onFileChange(event: any) {
  //   this.uploadImage(event.target.files[0]);
  // }

  // uploadImage(arg0: any) {
  //   this._fileUploadService.uploadImage(arg0, "product");
  // }

  // checkout(productId: number): void {
  //   this.router.navigate(['checkout', productId], { relativeTo: this.route });
  // }
}
