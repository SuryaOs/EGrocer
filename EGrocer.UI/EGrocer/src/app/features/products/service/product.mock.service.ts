import { Injectable } from '@angular/core';
import { IProductService } from './product-i.service';

@Injectable({
  providedIn: 'root'
})
export class ProductMockService implements IProductService {

  constructor() { }
  get(): string {
    return "I am from Product Mock Service";
  }
}
