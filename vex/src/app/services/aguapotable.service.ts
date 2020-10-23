import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Propietario} from '../models/aguapotable'

@Injectable({
  providedIn: 'root'
})
export class AguapotableService {

  constructor(private http: HttpClient) { }

  //contribuyentes
  listContribuyentes(params:any): Observable<Propietario>{
    return params
  }

  createPropietario(propietario: Propietario): Observable<Propietario>{
    const url = 'http://localhost:3000/users';
    return this.http.post<Propietario>(url, propietario);
  }
  

}
