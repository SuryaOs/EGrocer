import { Injectable } from '@angular/core';
import { IProductService } from './product-i.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IProductService {

  constructor() { }
  get(): string {
    return "I am from Product Service"
  }
}
