import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  login(params:any): Observable<any> {
      return this.http.post(`http://localhost:3000/auth/login`, params);
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
