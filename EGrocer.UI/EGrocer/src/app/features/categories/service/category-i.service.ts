import { InjectionToken } from "@angular/core";

export const CategoryServiceToken = new InjectionToken<ICategoryService>(
  'CategoryServiceToken'
);

export interface ICategoryService{

}
