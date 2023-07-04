import { AuthServiceToken } from "src/app/features/auth/services/auth-i.service";
import { AuthService } from "src/app/features/auth/services/auth.service";
import { CategoryServiceToken } from "src/app/features/product-category-page/category/service/category-i.service";
import { CategoryService } from "src/app/features/product-category-page/category/service/category.service";
import { OrderServiceToken } from "src/app/features/product-category-page/checkout/service/order-i.service";
import { OrderService } from "src/app/features/product-category-page/checkout/service/order.service";
import { ProductServiceToken } from "src/app/features/product-category-page/product/service/product-i.service";
import { ProductService } from "src/app/features/product-category-page/product/service/product.service";
import { FileUploadServiceToken } from "src/app/shared/service/file-upload/file-upload-i.service";
import { FileUploadService } from "src/app/shared/service/file-upload/file-upload.service";

export const restServices = [
  { provide: ProductServiceToken, useClass: ProductService},
  { provide: CategoryServiceToken, useClass: CategoryService},
  { provide: FileUploadServiceToken, useClass: FileUploadService},
  { provide: OrderServiceToken, useClass: OrderService},
  { provide: AuthServiceToken, useClass: AuthService}
]
