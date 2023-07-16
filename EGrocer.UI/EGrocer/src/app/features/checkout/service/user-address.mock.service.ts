import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IUserAddressService } from "./user-address-i.service";
import { IUserAddress } from "../models/user-address-i";
@Injectable({
  providedIn: "root",
})
export class UserAddressMockService implements IUserAddressService {
  constructor() {}

  get(userId: string): Observable<IUserAddress[]> {
    return of([
      {
        "id": 2,
        "city": "Madurai",
        "state": "Tamil Nadu",
        "address1": "Villapuram",
        "address2": "",
        "zipCode": 625012,
        "mobileNumber": "",
        "isDefault": true,
        "userId": "dfbd9d3a-6446-4d4c-a4b3-00465294f800",
      }
    ])
  }

}
