import { InjectionToken } from "@angular/core";
import { IProduct } from "../models/product-i";
import { Observable } from "rxjs";

export const ProductServiceToken = new InjectionToken<IProductService>(
  'ProductServiceToken'
);

export interface IProductService{
  getAllProducts(): Observable<IProduct[]>;
  getProductByCategoryId(categoryId: number): Observable<IProduct[]>;
  getProductByProductId(productId: number): Observable<IProduct>;

  save(requestBody: IProduct): Observable<IProduct>;
  delete(productId: number): Observable<boolean>;
  update(requestBody: any): Observable<IProduct>
}
