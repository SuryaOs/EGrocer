import { Component, Inject, OnInit } from "@angular/core";
import { IProduct } from "../../models/product-i";
import { IGridColumn } from "src/app/shared/interfaces/grid-column-i";
import { IProductService, ProductServiceToken } from "../../service/product-i.service";
import { ICategoryService, CategoryServiceToken } from "../../../category/service/category-i.service";
import { ICategory } from "../../../category/models/category-i";

@Component({
  selector: "app-summary-grid",
  templateUrl: "./summary-grid.component.html",
  styleUrls: ["./summary-grid.component.scss"],
})
export class SummaryGridComponent implements OnInit {
  products: any[] = [];
  category: ICategory[] = [];

  gridColumns: IGridColumn[] = [
    { propertyName: "name", displayName: "Name" },
    { propertyName: "price", displayName: "Price" },
    { propertyName: "description", displayName: "Description" },
    { propertyName: "categoryName", displayName: "Category Name" },
  ];

  constructor(
    @Inject(ProductServiceToken)
    private _productService: IProductService,
    @Inject(CategoryServiceToken)
    private _categoryService: ICategoryService
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }

  private loadCategories() {
    this._categoryService.getAllCategory().subscribe((category: ICategory[]) => {
      this.category = category;
    });
  }

  private loadProducts() {
    this._productService.getAllProducts().subscribe((products: IProduct[]) => {
      this.products = products.map((product: IProduct) => {
        const category = this.category.find((x) => x.id === product.categoryId);
        const categoryName = category ? category.name : '';
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          categoryName: categoryName,
        };
      });
    });
  }
}
