import { CategoryServiceToken } from "src/app/features/categories/service/category-i.service";
import { CategoryService } from "src/app/features/categories/service/category.service";
import { ProductServiceToken } from "src/app/features/products/service/product-i.service";
import { ProductService } from "src/app/features/products/service/product.service";
import { FileUploadServiceToken } from "src/app/shared/service/file-upload-i.service";
import { FileUploadService } from "src/app/shared/service/file-upload.service";

export const restServices = [
  { provide: ProductServiceToken, useClass: ProductService},
  { provide: CategoryServiceToken, useClass: CategoryService},
  { provide: FileUploadServiceToken, useClass: FileUploadService}
]
