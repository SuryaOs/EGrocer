import { AuthServiceToken } from "src/app/features/auth/services/auth-i.service";
import { AuthMockService } from "src/app/features/auth/services/auth.mock.service";
import { OrderServiceToken } from "src/app/features/checkout/service/order-i.service";
import { OrderMockService } from "src/app/features/checkout/service/order.mock.service";
import { UserAddressServiceToken } from "src/app/features/checkout/service/user-address-i.service";
import { UserAddressMockService } from "src/app/features/checkout/service/user-address.mock.service";
import { CategoryServiceToken } from "src/app/features/product-category-page/category/service/category-i.service";
import { CategoryMockService } from "src/app/features/product-category-page/category/service/category.mock.service";
import { ProductServiceToken } from "src/app/features/product-category-page/product/service/product-i.service";
import { ProductMockService } from "src/app/features/product-category-page/product/service/product.mock.service";
import { FileUploadServiceToken } from "src/app/shared/service/file-upload/file-upload-i.service";
import { FileUploadMockService } from "src/app/shared/service/file-upload/file-upload.mock.service";

export const restServices = [
  { provide: ProductServiceToken, useClass: ProductMockService},
  { provide: CategoryServiceToken, useClass: CategoryMockService},
  { provide: FileUploadServiceToken, useClass: FileUploadMockService},
  { provide: OrderServiceToken, useClass: OrderMockService},
  { provide: AuthServiceToken, useClass: AuthMockService},
  { provide: UserAddressServiceToken, useClass: UserAddressMockService}
]
