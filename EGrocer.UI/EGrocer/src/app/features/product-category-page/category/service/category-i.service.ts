import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { ICategory } from "../models/category-i";

export const CategoryServiceToken = new InjectionToken<ICategoryService>(
  'CategoryServiceToken'
);

export interface ICategoryService{
  getAllCategory(): Observable<ICategory[]>;
}
