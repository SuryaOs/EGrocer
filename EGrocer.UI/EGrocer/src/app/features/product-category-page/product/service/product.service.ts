import { Injectable } from '@angular/core';
import { IProductService } from './product-i.service';
import { IProduct } from '../models/product-i';
import { BaseClientProxy } from 'src/app/core/rest-proxies/baseclient.proxy';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseClientProxy implements IProductService {

  constructor(http: HttpClient) {
      super(http);
    }

  getAllProducts(): Observable<IProduct[]> {
    return this.baseGet<IProduct[]>(`${environment.apiUrl}/product`).pipe(
      map(products => products.map(this.modifyProductImage))
    );
  }

  private modifyProductImage(product: IProduct): IProduct {
    const imageName = product.imageName || 'noimage.jpg';
    return {
      ...product,
      imageName: `${environment.apiUrl}/images/product/${imageName}`
    };
  }
}
