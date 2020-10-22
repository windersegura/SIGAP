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
    this.cookie.set("auth", token);
  }

  getToken(){
    this.cookie.get("auth");
  }
}
