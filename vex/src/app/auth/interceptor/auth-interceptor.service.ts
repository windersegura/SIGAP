import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>{
      const token: string = localStorage.getItem("auth");
      let request= req;

      if(token){
        request= req.clone({
          setHeaders:{
            auth: token
          }
        })
      }
    return next.handle(request);
  }
}
