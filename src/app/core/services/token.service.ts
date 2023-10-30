import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {LocalStorageService} from "./local-storage.service";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private jwtHelper: JwtHelperService, private localStorageService: LocalStorageService) {
  }

  decodeToken(token: string): string | null {
    try {
      return this.jwtHelper.decodeToken(token).sub;
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
