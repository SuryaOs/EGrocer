import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { IProductService, ProductServiceToken } from '../../service/product-i.service';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product-i';
import { FileUploadServiceToken, IFileUploadService } from 'src/app/shared/service/file-upload-i.service';

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
    private _productService: IProductService,
    @Inject(FileUploadServiceToken)
    private _fileUploadService: IFileUploadService
  ) { }

  ngOnInit() {
    this.products$ = this._productService.getAllProducts();
  }

  onFileChange(event) {
    this.uploadImage(event.target.files[0]);
  }

  uploadImage(arg0: any) {
    this._fileUploadService.uploadImage(arg0, "product");
  }

}
