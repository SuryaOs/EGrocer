import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  CategoryServiceToken,
  ICategoryService,
} from "../../../category/service/category-i.service";
import { ICategory } from "../../../category/models/category-i";
import {
  FileUploadServiceToken,
  IFileUploadService,
} from "src/app/shared/service/file-upload/file-upload-i.service";
import { IProductService, ProductServiceToken } from "../../service/product-i.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  categories!: ICategory[];
  productForm!: FormGroup;

  fileToUpload: any;

  constructor(
    @Inject(CategoryServiceToken)
    private _categoryService: ICategoryService,
    @Inject(FileUploadServiceToken)
    private _fileUploadService: IFileUploadService,
    @Inject(ProductServiceToken)
    private _productService: IProductService,
    private _formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
   this.loadCategories();
   this.initProductForm();
  }

  onFileChange(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  onSubmit() {
    // if (this.productForm.invalid) {
    //   return;
    // }

    this.uploadImage();
    // Perform submit logic here
    // Access form values using this.productForm.value
    // Example: console.log(this.productForm.value);
  }

  uploadImage() {
    this._fileUploadService
    .uploadImage(this.fileToUpload, 'product')
    .subscribe(
      (response: any) => {
        const requestBody = this.buildRequestBody(response.imageName);
        this.save(requestBody);
      }
    );
  }

  private save(requestBody: any) {
    this._productService.save(requestBody).subscribe((response) => {
      console.log(response);
    })
  }

  private buildRequestBody(imageName: string) {
    const product = {
      Name: this.productForm.get("name")?.value,
      Price: Number(this.productForm.get("price")?.value),
      Description: this.productForm.get("description")?.value,
      ImageName: imageName,
      AvailableQuantity: Number(this.productForm.get("quantity")?.value),
      CategoryId: Number(this.productForm.get("category")?.value),
    };
    return product;
  }

  onClear() {
    this.productForm.reset();
    this.fileToUpload = undefined;
  }

  private loadCategories() {
    this._categoryService
      .getAllCategory()
      .subscribe((category: ICategory[]) => {
        this.categories = category;
        this.cd.detectChanges();
      });
  }

  private initProductForm() {
    this.productForm = this._formBuilder.group({
      name: ["", Validators.required],
      description: [""],
      category: ["", Validators.required],
      price: ["", Validators.required],
      quantity: ["", Validators.required],
      image: [""],
    });
  }
}
