import {Injectable} from "@angular/core";
import {env} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, mergeMap, Observable} from "rxjs";
import {UserModel} from "../model/user.model";
import {AuthFacade} from "../../auth/store/facades/auth-facade.service";
import {TokenService} from "./token.service";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = env.apiUrl;


  constructor(private http: HttpClient, private authFacade: AuthFacade, private tokenService: TokenService, private localStorageService: LocalStorageService) {
  }

  getUser(): Observable<UserModel> {
    const username = this.getUsernameFromLocalStorageByToken();
    const path = this.apiUrl + 'users/username/' + username;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.localStorageService.getToken()
    });

    // Realiza la primera solicitud para obtener el id
    return this.http.get<UserModel>(path, {headers}).pipe(
      mergeMap((response: UserModel) => {
        const id = response.id;
        const secondPath = this.apiUrl + 'users/' + id;
        return this.http.get<UserModel>(secondPath, {headers}).pipe(
          map((additionalInfo: UserModel) => {
            return {
              id: id,
              username: response.username,
              lastname: response.lastname,
              firstname: response.firstname,
              experience: response.experience ? response.experience : 0,
            } as UserModel;
          }))
      })
    )

  }


  getUsernameFromLocalStorageByToken() {
    const token = this.localStorageService.getToken();
    return this.tokenService.decodeToken(token);


  }


}
