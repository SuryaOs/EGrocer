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

  public basePost<T>(serviceUrl: string, body: T): Observable<T> {
    return new Observable<T>((observer) => {
      this.http.post<T>(serviceUrl, body).subscribe((response) => {
        observer.next(response);
      });
    });
  }

  public basePut<T>(serviceUrl: string, body: T): Observable<T> {
    return new Observable<T>((observer) => {
      this.http.put<T>(serviceUrl, body).subscribe((response) => {
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
