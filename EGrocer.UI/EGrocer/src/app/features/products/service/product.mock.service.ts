import { Injectable } from '@angular/core';
import { IProductService } from './product-i.service';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product-i';

@Injectable({
  providedIn: 'root'
})
export class ProductMockService implements IProductService {

  constructor() { }
  getAllProducts(): Observable<IProduct[]> {
    return of([
      {
        "id": 1,
        "name": "Beverages One",
        "price": 50,
        "description": "Beverages one is super healthy drink",
        "categoryId": 1,
        "category": null
      },
      {
        "id": 2,
        "name": "Apple",
        "price": 30,
        "description": "Apple a day, keeps doctor away",
        "categoryId": 2,
        "category": null
      },
      {
        "id": 3,
        "name": "Oats",
        "price": 25,
        "description": "Oats are quickwin for breakfast",
        "categoryId": 3,
        "category": null
      },
      {
        "id": 4,
        "name": "Kiwi",
        "price": 30,
        "description": "Eat Kiwi, Fly Kiwi",
        "categoryId": 2,
        "category": null
      }
    ])
  }
}
