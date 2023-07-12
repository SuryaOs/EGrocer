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
  getProductByCategoryId(categoryId: number): Observable<IProduct[]> {
    return this.baseGet<IProduct[]>(`${environment.apiUrl}/product/getByCategory/${categoryId}`).pipe(
      map(products => products.map(this.modifyProductImage))
      );
  }

  getProductByProductId(productId: number): Observable<IProduct> {
    return this.baseGet<IProduct>(`${environment.apiUrl}/product/getByProduct/${productId}`).pipe(
      map(this.modifyProductImage)
      );
  }
  save(requestBody: IProduct): Observable<IProduct> {
    return this.basePost<IProduct, IProduct>(`${environment.apiUrl}/product`, requestBody).pipe(
      map(this.modifyProductImage)
    );
  }
  delete(productId: number): Observable<boolean> {
    return this.baseDelete(`${environment.apiUrl}/product/${productId}`);
  }

  private modifyProductImage(product: IProduct): IProduct {
    const imageName = product.imageName || 'noimage.jpg';
    return {
      ...product,
      imageName: `${environment.apiUrl}/images/product/${imageName}`
    };
  }
}
