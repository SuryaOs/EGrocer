import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAuthService } from './auth-i.service';
import { ILogin, ILoginResponse } from '../models/login-i';
import { IRegister } from '../models/register-i';

@Injectable({
  providedIn: 'root'
})
export class AuthMockService implements IAuthService{

  constructor() { }
  register(requestBody: IRegister): Observable<boolean> {
    return of(true);
  }
  login(requestBody: ILogin): Observable<ILoginResponse> {
    return of({
      token: '',
      result: true,
      userId: ''
    });
  }
}
