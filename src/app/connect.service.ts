import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  apiUrl = 'http://localhost:3000/customers';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token',
      'response-Type':  'application/json'
    })
  };
  
  

  constructor(private http: HttpClient) {
    this.getData();
  }

  //IMPORTANT: atleast one subscription otherwise it will not work
  addData(data:any): Observable<any> {
    return this.http.post(this.apiUrl, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  //IMPORTANT: atleast one subscription otherwise it will not work
  getData(): Observable<any> {
    return this.http.get(this.apiUrl, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

}
