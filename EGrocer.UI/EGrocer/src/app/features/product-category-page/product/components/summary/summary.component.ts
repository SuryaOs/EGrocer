import { ChangeDetectionStrategy, Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProductService, ProductServiceToken } from '../../service/product-i.service';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product-i';
import { FileUploadServiceToken, IFileUploadService } from 'src/app/shared/service/file-upload-i.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit, OnChanges {
  products$!: Observable<IProduct[]>;
  @Input() categoryId!: number;

  constructor(
    @Inject(ProductServiceToken)
    private _productService: IProductService,
    @Inject(FileUploadServiceToken)
    private _fileUploadService: IFileUploadService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.categoryId.firstChange) {
      const categoryId = changes.categoryId.currentValue;
      this.loadProducts(categoryId);
    }
  }

  private loadProducts(categoryId?: number): void {
    if(categoryId == undefined)
      this.products$ = this._productService.getAllProducts();
    else
      this.products$ = this._productService.getProductByCategoryId(categoryId);
  }

  onFileChange(event: any) {
    this.uploadImage(event.target.files[0]);
  }

  uploadImage(arg0: any) {
    this._fileUploadService.uploadImage(arg0, "product");
  }

  checkout(productId: number): void {
    this.router.navigate(['checkout', productId], { relativeTo: this.route });

  }

}
