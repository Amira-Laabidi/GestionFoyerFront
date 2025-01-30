import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { StorageService } from './storage.service';

const BASIC_URL = 'http://localhost:8081';
export const AUTH_HEADER = 'Authorization';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private httpClient: HttpClient, private storage: StorageService) {}

  login(signinRequest: { email: string; password: string }): Observable<any> {
    return this.httpClient
      .post<any>(`${BASIC_URL}/api/v1/auth/signin`, signinRequest, {
        observe: 'response',
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        tap(() => console.log('User Authentication')),
        map((res: HttpResponse<any>) => {
          this.storage.saveUser(res.body);

          const token = res.headers.get(AUTH_HEADER);
          if (token) {
            const bearerToken = token.substring(7); // Supprime le préfixe "Bearer "
            this.storage.saveToken(bearerToken);
          }

          return res.body;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    let errorMessage = 'An error occurred';
    if (error.status === 403) {
      errorMessage = 'Access forbidden. Please check your credentials.';
    }
    return throwError(() => new Error(errorMessage));
  }
}
