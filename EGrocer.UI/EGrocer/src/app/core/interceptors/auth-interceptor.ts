import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the authentication token from wherever you store it (e.g., local storage, cookie)
    const authToken = localStorage.getItem('authToken');

    // Clone the request and add the authentication token as a header
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    // Pass the modified request to the next interceptor or the HTTP handler
    return next.handle(authRequest);
  }
}
