import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseClientProxy } from 'src/app/core/rest-proxies/baseclient.proxy';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IRegister } from '../models/register-i';
import { IAuthService } from './auth-i.service';
import { ILogin } from '../models/login-i';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseClientProxy implements IAuthService {

  constructor(public http: HttpClient) {
    super(http);
  }
  register(requestBody: IRegister): Observable<boolean>{
    return this.basePost<IRegister, boolean>(`${environment.apiUrl}/auth/register`, requestBody);
  }
  login(requestBody: ILogin): Observable<boolean> {
    return this.basePost<ILogin, boolean>(`${environment.apiUrl}/auth/login`, requestBody);
  }
}
