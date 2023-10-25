import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {env} from "../../../environments/environment";
import {CredentialsModel} from "../model/credentials.model";
import {RegisterModel} from "../model/register.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = env.apiURL;

  constructor(private http: HttpClient) {
  }

  login(credentials: CredentialsModel): Observable<any> {
    const path = this.apiUrl + 'auth/login';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    return this.http.post(path, credentials, {headers}).pipe(
      tap((res) =>console.log(res))
    );
  }

  register(register: RegisterModel): Observable<any> {
    const path = this.apiUrl + 'auth/register';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(path, register, {headers}).pipe(
      tap((res) =>console.log(res))
    );
  }

  logout(): void {

  }
}
