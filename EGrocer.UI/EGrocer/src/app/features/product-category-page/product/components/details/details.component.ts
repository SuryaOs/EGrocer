import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CategoryServiceToken, ICategoryService } from "../../../category/service/category-i.service";
import { ICategory } from "../../../category/models/category-i";
import { FileUploadServiceToken, IFileUploadService } from "src/app/shared/service/file-upload/file-upload-i.service";
import { IProductService, ProductServiceToken } from "../../service/product-i.service";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "../../models/product-i";

@Component({
  selector: "app-product-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  categories!: ICategory[];
  productForm!: FormGroup;

  fileToUpload: any;
  productId: any;
  imageUrl = "";

  constructor(
    @Inject(CategoryServiceToken)
    private _categoryService: ICategoryService,
    @Inject(FileUploadServiceToken)
    private _fileUploadService: IFileUploadService,
    @Inject(ProductServiceToken)
    private _productService: IProductService,
    private _formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id");
    if (this.productId) {
      this.loadProduct(this.productId);
    }
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

    if (this.productId == undefined) this.uploadImage();
    else this.update();
    // Perform submit logic here
    // Access form values using this.productForm.value
    // Example: console.log(this.productForm.value);
  }

  uploadImage() {
    this._fileUploadService.uploadImage(this.fileToUpload, "product").subscribe((response: any) => {
      const requestBody = this.buildRequestBody(response.imageName);
      this.save(requestBody);
    });
  }

  private save(requestBody: any) {
    this._productService.save(requestBody).subscribe((response) => {
      console.log(response);
    });
  }

  private update() {
    const requestBody = this.buildRequestBody("no name", this.productId);
    this._productService.update(requestBody).subscribe((response) => {
      console.log(response);
    })
  }

  private buildRequestBody(imageName: string, productId?: any) {
    const { name, price, description, quantity, category } = this.productForm.value;

    const product = {
      Name: name,
      Price: price,
      Description: description,
      ImageName: imageName,
      AvailableQuantity: quantity,
      CategoryId: category,
      ...(productId && { Id: productId }),
    };
    return product;
  }

  onClear() {
    this.productForm.reset();
    this.fileToUpload = undefined;
    this.imageUrl = "";
  }

  private loadProduct(productId: any) {
    this._productService.getProductByProductId(productId).subscribe((response) => {
      console.log(response);
      this.populateForm(response);
    });
  }

  private populateForm(product: IProduct) {
    const { name, description, categoryId, price, availableQuantity, imageName } = product;
    this.productForm.patchValue({
      name,
      description,
      category: categoryId,
      price,
      quantity: availableQuantity,
    });

    this.imageUrl = imageName;
  }

  private loadCategories() {
    this._categoryService.getAllCategory().subscribe((category: ICategory[]) => {
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
