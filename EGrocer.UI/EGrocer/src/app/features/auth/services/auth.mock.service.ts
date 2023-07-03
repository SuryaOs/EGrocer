import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAuthService } from './auth-i.service';
import { ILogin } from '../models/login-i';
import { IRegister } from '../models/register-i';

@Injectable({
  providedIn: 'root'
})
export class AuthMockService implements IAuthService{

  constructor() { }
  register(requestBody: IRegister): Observable<boolean> {
    return of(true);
  }
  login(requestBody: ILogin): Observable<boolean> {
    return of(true);
  }
}
