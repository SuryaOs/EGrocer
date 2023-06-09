import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class BaseClientProxy {
  constructor(public http: HttpClient) { }

  public baseGet<T>(serviceUrl: string): Observable<T> {
    return new Observable<T>((observer) => {
      this.http.get<T>(serviceUrl).subscribe((response) => {
        observer.next(response);
      });
    });
  }

  public basePost<TRequest,TResponse>(serviceUrl: string, body: TRequest): Observable<TResponse> {
    return new Observable<TResponse>((observer) => {
      this.http.post<TResponse>(serviceUrl, body).subscribe((response) => {
        observer.next(response);
      });
    });
  }

  public basePut<TTRequest, TResponse>(serviceUrl: string, body: TTRequest): Observable<TResponse> {
    return new Observable<TResponse>((observer) => {
      this.http.put<TResponse>(serviceUrl, body).subscribe((response) => {
        observer.next(response);
      });
    });
  }

  public baseDelete<T>(serviceUrl: string): Observable<T> {
    return new Observable<T>((observer) => {
      this.http.delete<T>(serviceUrl).subscribe((response) => {
        observer.next(response);
      });
    });
  }
}
