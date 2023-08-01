import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { IUserAddress } from "../models/user-address-i";

export const UserAddressServiceToken = new InjectionToken<IUserAddressService>(
  'UserAddressServiceToken'
);

export interface IUserAddressService{
  get(userId: string): Observable<IUserAddress[]>;
}
