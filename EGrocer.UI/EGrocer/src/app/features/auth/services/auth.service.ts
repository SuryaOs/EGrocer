import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseClientProxy } from 'src/app/core/rest-proxies/baseclient.proxy';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IRegister } from '../models/register-i';
import { IAuthService } from './auth-i.service';
import { ILogin, ILoginResponse } from '../models/login-i';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseClientProxy implements IAuthService {

  constructor(http: HttpClient) {
    super(http);
  }
  register(requestBody: IRegister): Observable<boolean>{
    return this.basePost<IRegister, boolean>(`${environment.apiUrl}/auth/register`, requestBody);
  }
  login(requestBody: ILogin): Observable<ILoginResponse> {
    return this.basePost<ILogin, ILoginResponse>(`${environment.apiUrl}/auth/login`, requestBody);
  }
}
