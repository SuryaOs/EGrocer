import { Injectable } from "@angular/core";
import { IOrderService } from "./order-i.service";
import { Observable, of } from "rxjs";
import { IOrderDetails } from "../models/add-order-i";
@Injectable({
  providedIn: "root",
})
export class OrderMockService implements IOrderService {
  constructor() {}

  placeOrder(requestBody: IOrderDetails): Observable<boolean> {
    return of(true);
  }

}
