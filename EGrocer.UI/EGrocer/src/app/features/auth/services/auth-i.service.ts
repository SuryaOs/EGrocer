import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { IRegister } from "../models/register-i";
import { ILogin } from "../models/login-i";

export const AuthServiceToken = new InjectionToken<IAuthService>(
  'AuthServiceToken'
);

export interface IAuthService{
  register(requestBody: IRegister): Observable<boolean>;
  login(requestBody: ILogin): Observable<boolean>;
}
