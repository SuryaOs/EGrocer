import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';

        // Check the error type or status code and set a custom error message
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = 'An error occurred: ' + error.error.message;
        } else {
          // Server-side error
          errorMessage = 'Server error: ' + error.status + ' - ' + error.message;
        }

        // Show the error message in an alert
        window.alert(errorMessage);

        // Pass the error to the caller
        // return throwError(errorMessage);
        return EMPTY;
      })
    );
  }
}
