import { CategoryServiceToken } from "src/app/features/categories/service/category-i.service";
import { CategoryMockService } from "src/app/features/categories/service/category.mock.service";
import { ProductServiceToken } from "src/app/features/products/service/product-i.service";
import { ProductMockService } from "src/app/features/products/service/product.mock.service";

export const restServices = [
  { provide: ProductServiceToken, useClass: ProductMockService},
  { provide: CategoryServiceToken, useClass: CategoryMockService}
]
