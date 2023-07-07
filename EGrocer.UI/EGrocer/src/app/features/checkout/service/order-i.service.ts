import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { IOrderDetails } from "../models/add-order-i";

export const OrderServiceToken = new InjectionToken<IOrderService>(
  'OrderServiceToken'
);

export interface IOrderService{
  placeOrder(requestBody: IOrderDetails):Observable<boolean>;
}
