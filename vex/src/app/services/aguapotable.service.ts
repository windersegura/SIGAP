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
  listContribuyentes(params?:any): Observable<Array<Propietario>>{
    const url = 'http://localhost:3000/propietarios'
    const options = {
      params: params
    }
    return this.http.get<Array<Propietario>>(url, options)
  }

  createPropietario(propietario: Propietario): Observable<Propietario>{
    const url = 'http://localhost:3000/propietarios';
    return this.http.post<Propietario>(url, propietario);
  }
  

}
