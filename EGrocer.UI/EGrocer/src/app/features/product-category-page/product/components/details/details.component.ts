import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CategoryServiceToken, ICategoryService } from "../../../category/service/category-i.service";
import { ICategory } from "../../../category/models/category-i";

@Component({
  selector: "app-product-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  categories!: ICategory[];
  productForm!: FormGroup;

  constructor(
    @Inject(CategoryServiceToken)
    private _categoryService: ICategoryService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.initProductForm();
  }

  private loadCategories() {
    this._categoryService.getAllCategory().subscribe((category: ICategory[]) => {
      this.categories = category;
    });
  }

  private initProductForm() {
    this.productForm = this._formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
    });
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    // Perform submit logic here
    // Access form values using this.productForm.value
    // Example: console.log(this.productForm.value);
  }

  onClear() {
    this.productForm.reset();
  }
}
