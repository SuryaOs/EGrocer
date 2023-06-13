import { InjectionToken } from "@angular/core";
import { IProduct } from "../models/product-i";
import { Observable } from "rxjs";

export const ProductServiceToken = new InjectionToken<IProductService>(
  'ProductServiceToken'
);

export interface IProductService{
  getAllProducts(): Observable<IProduct[]>;
}
