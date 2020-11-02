import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from '../services/config.service';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private config: ConfigService
  ) { }

  login(params:any): Observable<any> {
      return this.http.post(`${this.config.appConfig.apiUrl}/auth/login`, params);
  }

  setToken(token:string){
    localStorage.setItem("auth",token);
    
  }

  logOut(){

  }

  isLogged(){
    return !!(this.getToken());
  }

  public getToken():string{
    //this.cookie.get("auth");
    return localStorage.getItem("auth");
  }
}
