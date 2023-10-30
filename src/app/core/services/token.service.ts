import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {LocalStorageService} from "./local-storage.service";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private jwtHelper: JwtHelperService, private localStorageService: LocalStorageService) {
  }

  decodeToken(token: string): any {
    try {
      console.log(token)
      console.log(this.jwtHelper.decodeToken(token))
      return this.jwtHelper.decodeToken(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  authenticated(): any {

    const token = this.localStorageService.getToken();
    return this.decodeToken(token) != null && !this.isTokenExpired(token);

  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }
}
