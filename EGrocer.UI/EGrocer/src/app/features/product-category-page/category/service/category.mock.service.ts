import { Injectable } from '@angular/core';
import { ICategoryService } from './category-i.service';
import { Observable, of } from 'rxjs';
import { ICategory } from '../models/category-i';

@Injectable({
  providedIn: 'root'
})
export class CategoryMockService implements ICategoryService{

  constructor() { }
  getAllCategory(): Observable<ICategory[]> {
    return of([
      {
        "id": 1,
        "name": "Beverages",
        "description": "Beverage you for quick energy",
        "products": null
      },
      {
        "id": 2,
        "name": "Fruits and Vegetables",
        "description": "Fruits and Veggies",
        "products": null
      }]);
  }
}
