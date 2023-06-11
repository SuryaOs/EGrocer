import { InjectionToken } from "@angular/core";

export const ProductServiceToken = new InjectionToken<IProductService>(
  'ProductServiceToken'
);

export interface IProductService{
  get(): string;
}
