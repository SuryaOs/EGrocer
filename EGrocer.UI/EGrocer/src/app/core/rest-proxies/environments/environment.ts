import { CategoryServiceToken } from "src/app/features/category/service/category-i.service";
import { CategoryMockService } from "src/app/features/category/service/category.mock.service";
import { ProductServiceToken } from "src/app/features/product/service/product-i.service";
import { ProductMockService } from "src/app/features/product/service/product.mock.service";
import { FileUploadServiceToken } from "src/app/shared/service/file-upload-i.service";
import { FileUploadMockService } from "src/app/shared/service/file-upload.mock.service";

export const restServices = [
  { provide: ProductServiceToken, useClass: ProductMockService},
  { provide: CategoryServiceToken, useClass: CategoryMockService},
  { provide: FileUploadServiceToken, useClass: FileUploadMockService}
]
