import { Injectable } from '@angular/core';
import { BaseClientProxy } from 'src/app/core/rest-proxies/baseclient.proxy';
import { HttpClient } from '@angular/common/http';
import { IUserAddressService } from './user-address-i.service';
import { Observable } from 'rxjs';
import { IUserAddress } from '../models/user-address-i';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService extends BaseClientProxy implements IUserAddressService {

  constructor(http: HttpClient) {
      super(http);
    }

  get(userId: string): Observable<IUserAddress[]> {
    return this.baseGet<IUserAddress[]>(`${environment.apiUrl}/address/getByUser/${userId}`);
  }

}
