import { Injectable } from '@angular/core';
import { BaseClientProxy } from 'src/app/core/rest-proxies/baseclient.proxy';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IOrderService } from './order-i.service';
import { IOrderDetails } from '../models/add-order-i';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseClientProxy implements IOrderService {

  constructor(http: HttpClient) {
      super(http);
    }
  placeOrder(requestBody: IOrderDetails): Observable<boolean> {
    return this.basePost<IOrderDetails, boolean>(`${environment.apiUrl}/order`, requestBody)
  }

}
