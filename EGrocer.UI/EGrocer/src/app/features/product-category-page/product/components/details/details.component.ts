import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CategoryServiceToken, ICategoryService } from "../../../category/service/category-i.service";
import { ICategory } from "../../../category/models/category-i";
import { FileUploadServiceToken, IFileUploadService } from "src/app/shared/service/file-upload/file-upload-i.service";
import { IProduct } from "../../models/product-i";

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
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.initProductForm();
  }

    onFileChange(event: any) {
      this.fileToUpload = event.target.files[0];
    }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    this.uploadImage()
    // Perform submit logic here
    // Access form values using this.productForm.value
    // Example: console.log(this.productForm.value);
  }

  uploadImage() {
    this._fileUploadService.uploadImage(this.fileToUpload, "product").subscribe((x: any) => {
        this.saveProduct()
      }
    );
  }

  private saveProduct(){
    const requestBody = this.buildRequestBody()
  }

  private buildRequestBody() {
    const productName = this.productForm.get('name')?.value.ToLowerCase()
    const product = {
      Name: productName,
      Price: this.productForm.get('price')?.value,
      Description: this.productForm.get('description')?.value,
      ImageName: productName,
      AvailableQuantity: 1,
      CategoryId: this.productForm.get('categoryId')?.value,
    };
  }

  onClear() {
    this.productForm.reset();
    this.fileToUpload = undefined;
  }

  private loadCategories() {
    this._categoryService.getAllCategory().subscribe((category: ICategory[]) => {
      this.categories = category;
    });
  }

  private initProductForm() {
    this.productForm = this._formBuilder.group({
      name: ['', Validators.required],
      description:[''],
      category: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
    });
  }
}
